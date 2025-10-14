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
