import { Request, Response } from "express";
import toDoModel from "./examen.model";
export async function crearTarea (req:Request, res:Response){
    const {descripcion, precio} = req.body;
    const nuevaTarea = await toDoModel.create({
        descripcion: descripcion,
        precio: precio,
        status: "Pendiente"
    })

    res.status(201).json(nuevaTarea);       
}

export async function completarTarea(req:Request, res:Response){
  //http://localhost:3000/to-do/1a2b3c4d5e6f   ---id
    const {id} = req.params; 
    const datoGuardado = await toDoModel.findOne({_id: id})
    
    if (!datoGuardado){
        res.status(404).json({message: "Task not found"})
        return
    }
    const nuevoEstado =datoGuardado.status =="Pendiente"?
    "Completado":
    "Pendiente"
    console.log({id}) 
    const  datoActualizado = await toDoModel.findOneAndUpdate({_id:id},{status:nuevoEstado})
    res.json({message: "Estado cambiado", datoActualizado});
}

export async function modificar(req:Request, res:Response){
    const {id:_id} = req.params;
    const userUpdate = await toDoModel.findOneAndUpdate({_id}, req.body)
    if (!userUpdate){
        res.status(404).json({message: "Tarea no encontrada"})
        return
    }
    res.json({message: "Actualizado correctamente"})
}

export async function eliminar(req:Request, res:Response){
    const {id:_id} = req.params;
    const userDelete = await toDoModel.findOneAndDelete({_id})
    if (!userDelete){
        res.status(404).json({message: "Tarea no encontrada"})
        return
    }
    res.json({message: "Eliminado correctamente"})
}

export async function leerTareas (req:Request, res:Response){
  try {
        const tareas = await toDoModel.find();

        res.status(200).json(tareas);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener tareas", error });
    }
   
}

export async function obtenerTarea(req: Request, res: Response) {

    try {

        const { id } = req.params;

        const tarea = await toDoModel.findById(id);

        if (!tarea) {
            res.status(404).json({
                message: "Tarea no encontrada"
            });
            return;
        }

        res.status(200).json(tarea);

    } catch (error) {

        res.status(500).json({
            message: "Error al obtener tarea",
            error
        });
    }
}