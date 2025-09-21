import express from "express";
import { getAllNOtes, updateNote, createNote, deleteNote } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNOtes);

router.post("/", createNote);

router.put("/:id", updateNote);
    
router.delete("/:id", deleteNote);

export default router