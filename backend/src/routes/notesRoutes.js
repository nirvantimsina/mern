import express from "express";
import { getAllNotes, getNoteById, updateNote, createNote, deleteNote } from "../controllers/notesController.js";

// domain routes, this is where you define the routes that you want for your app

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", updateNote);
    
router.delete("/:id", deleteNote);

export default router