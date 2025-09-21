import mongoose from "mongoose";

// schema design for the database, here you define the type of data and other neat stuff that is to be sent to the db

const noteScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteScheme)

export default Note