import Note from "../models/Note.js";

//this is where you define all the crud operations to be performed

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ updatedAt: -1 }); // -1 starts as descendding order
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller:", error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found." });
    res.json(note);
  } catch (error) {
    console.error("Error in getNotesById controller:", error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });

    await newNote.save();
    res.status(201).json({ message: "Note created successfully." });
  } catch (error) {
    console.error("Error createNote controller.", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true,
      }
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Note Not Found." });
    else return res.status(200).json({ message: "Note Updated Successfully." });
  } catch (error) {
    console.error("Error updateNotes controller.", error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote)
      return res.status(404).json({ message: "Note Not Found." });
    res.json({ message: "Note Deleted Successfully." });
  } catch (error) {
    console.log("Error deleteNotes controller.", error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};
