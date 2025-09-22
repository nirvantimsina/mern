import express from "express";
import dotenv from "dotenv";
import cors from 'cors'

import connectdb from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";

dotenv.config();

const app = express();


// middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/notes", notesRoutes);

// start serverhen(() => {
  connectdb();
  app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started at port: ${process.env.SERVER_PORT}`);
    console.log(`Server running at: http://localhost:${process.env.SERVER_PORT}`);
  });
