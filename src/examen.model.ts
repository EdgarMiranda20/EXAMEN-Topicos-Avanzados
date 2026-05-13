import mongoose = require("mongoose");




const UserSchema = new mongoose.Schema({
    descripcion:{type:String,required:true},
    precio:{type:Number, required:true},
    status:{type:String, required:true,enum:["Pendiente","Completado"]}
})

const toDoModel= mongoose.model("TODO",UserSchema)
export default toDoModel
