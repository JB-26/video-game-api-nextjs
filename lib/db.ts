import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  // check if connected, so we don't connect twice
  // Connection ready state
  // 0 = disconnected
  // 1 = connected
  // 2 = connecting
  // 3 = disconnecting
  // 99 = uninitialized
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("Already connected to MongoDB");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting to MongoDB...");
    return;
  }

  // ensure that the connection is established before proceeding
  try {
    await mongoose.connect(MONGODB_URI!, {
      dbName: "videogameapi",
      bufferCommands: true,
    });
    console.log("Connected!");
  } catch (err) {
    console.log(`Error - ${err}`);
    throw new Error(`Error - ${err}`);
  }
};
export default connect;
