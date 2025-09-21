import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import connectdb from "./config/db.js";

dotenv.config();

const app = express();

connectdb();

// middleware
app.use(express.json());


app.use("/api/notes", notesRoutes);


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started at port: ${process.env.SERVER_PORT}`);
    console.log(`Server running at: http://localhost:${process.env.SERVER_PORT}`);
});

