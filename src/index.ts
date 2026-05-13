import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { error } from "node:console";
import toDoRouter from "./examen.routes";


const app = express();

mongoose.connect("mongodb://localhost:27017/")
    .then(()=>console.log("conectado a Mongodb"))
    .catch((error)=>console.error(error))

app.use(express.json());
app.use(cors());

app.use("/task", toDoRouter)
//http://localhost:3000/task

app.listen(3000,()=> console.log("http://localhost:3000"))