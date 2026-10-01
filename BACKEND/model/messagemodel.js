import mongoose from "mongoose"
import validator from "validator"


const messageschema=new mongoose.Schema({

    name:{
        type: String,
        required:true,
        minlength: [3,"First name must be contain atleast 3 character"]
    },

    phone:{
        type: String,
        required:true,
        minlength: [10],
        maxlength:[11]

    },

    message:{
        type: String,
        required:true,

        

    }

   


})

export const messagesend=mongoose.model("messagesend",messageschema)
