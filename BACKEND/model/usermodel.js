import mongoose from "mongoose"
import validator from "validator"
import jwt from "jsonwebtoken"

const registration=new mongoose.Schema({
    

    firstName:{
        type:String,
        required:true,
        minlength:[3,"minimum 3 character must be in first name"]
    },
    lastName:{
        type:String,
        required:true,
        minlength:[3,"minimum 3 character must be in first name"]
    },

    Phone:{
        type:String,
        required:true,
        minlength:[10,"minimum 3 character must be in phone"],
        maxlength:[11,"maximum 11 character in phone "]
    },

    Email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"enter valid email"]
    },

    Role:{
        type:String,
        required:true,
        enum:["Admin","Patient"]
    }

})

registration.methods.generateJsonWebToken= function (){
    try{
    return jwt.sign({id: this._id },'216455454344752',{
        expiresIn:'7d'
    })
}catch (error){
    console.error("error ganerating token",error)
    throw error;
}
}



export const User=mongoose.model("User",registration)
