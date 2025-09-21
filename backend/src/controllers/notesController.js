import Note from "../models/Note.js";



export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)

    } catch (error) {
        console.error("Error in getAllNotes controller:", error);
        res.status(500).json({message:"Internal Server Error."});
    }
};

export const createNote = async (req, res) => {
    try {
        const {title, content} = req.body
        const newNote = new Note({title, content});

        await newNote.save();
        res.status(201).json({message:"Note created successfully."})
    } catch (error) {
        console.error("Error createNote controller.", error);
        res.status(500).json({message:"Internal server error."})
    }
};

export const updateNote = async (req, res) => {
    try {
        
    } catch(error) {}
};

export const deleteNote = (req, res) => {
    res.status(200).json({message:"Note deleted successfully!"});
};