import { Schema, model, models } from "mongoose";

const VideogameSchema = new Schema(
  {
    title: { type: String, required: true },
    platform: { type: String, required: true },
    developer: { type: String, required: true },
    releaseDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

// check if the model exists before creating one
// fun fact: mongoose is case sensitive, so we need to use the same casing as the model name. Otherwise it will try to overwrite the existing model.
const Videogame = models.Videogame || model("Videogame", VideogameSchema);

// exported so it can be used in other files
export default Videogame;
