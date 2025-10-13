import { Schema, model, models } from "mongoose";

const videogameSchema = new Schema(
  {
    title: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
