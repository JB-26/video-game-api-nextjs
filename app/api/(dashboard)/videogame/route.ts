import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Videogame from "@/lib/models/videogame";
import { Types } from "mongoose";

// GET endpoint
export const GET = async () => {
  try {
    // connect to the db
    await connect();
    const videogames = await Videogame.find();
    return new NextResponse(JSON.stringify(videogames), { status: 200 });
  } catch (error) {
    return new NextResponse(`Error in retrieving video games - ${error}`, {
      status: 500,
    });
  }
};

export const POST = async (request: Request) => {
  try {
    // get value from body of request
    const body = await request.json();
    // connect to the db
    await connect();
    // create new video game
    const newVideogame = new Videogame(body);
    // save it to the DB
    await newVideogame.save();
    // return response
    return new NextResponse(
      JSON.stringify({
        message: "Video game created successfully",
        videogame: newVideogame,
      }),
      { status: 201 },
    );
  } catch (error) {
    return new NextResponse(`Error in creating video game - ${error}`, {
      status: 500,
    });
  }
};

export const PATCH = async (request: Request) => {
  try {
    // get value from body of request
    const body = await request.json();
    // destructuring
    const { id, newTitle, newPlatform, newDeveloper, newReleaseDate } = body;
    // connect to the db
    await connect();
    // if id is not valid, return error response
    if (!id) {
      return new NextResponse(JSON.stringify({ message: "ID not found" }), {
        status: 404,
      });
    }
    // if id is not valid, return error response
    if (!Types.ObjectId.isValid(id)) {
      return new NextResponse(JSON.stringify({ message: "Invalid ID" }), {
        status: 400,
      });
    }
    // new constant of the updated video game
    const updatedVideogame = await Videogame.findOneAndUpdate(
      { _id: new Types.ObjectId(id) },
      {
        title: newTitle,
        platform: newPlatform,
        developer: newDeveloper,
        releaseDate: newReleaseDate,
      },
      { new: true },
    );

    if (!updatedVideogame) {
      return new NextResponse(
        JSON.stringify({
          message: "Video game not found",
        }),
        {
          status: 404,
        },
      );
    }

    // return response
    return new NextResponse(
      JSON.stringify({
        message: "Video game updated successfully",
        videogame: updatedVideogame,
      }),
    );
  } catch (error) {
    return new NextResponse(`Error in updating video game - ${error}`, {
      status: 500,
    });
  }
};
