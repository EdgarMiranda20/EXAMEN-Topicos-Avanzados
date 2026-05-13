import {Express, Router } from "express";
import { completarTarea, crearTarea, eliminar, leerTareas, modificar, obtenerTarea } from "./examen-controller";

const toDoRouter = Router()
                                       //URL                                                     METODO
toDoRouter.post("/",crearTarea);       //http://localhost:3000/task                              POST
toDoRouter.delete("/:id",eliminar)     //http://localhost:3000/to-do/1a2b3c4d5e6f                 DELETE
toDoRouter.get("/", leerTareas)        //http://localhost:3000/to-do/1a2b3c4d5e6f                 READ
toDoRouter.get("/:id", obtenerTarea)

export default toDoRouter;