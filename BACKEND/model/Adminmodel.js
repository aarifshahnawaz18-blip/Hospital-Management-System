import mongoose from "mongoose";

const AdminSchema=new mongoose.Schema({

     name:{
        type:String,
        required:true
     },



     password:{
        type:String,
        required:true
     }

})

export const admindata=mongoose.model("Admindata",AdminSchema)