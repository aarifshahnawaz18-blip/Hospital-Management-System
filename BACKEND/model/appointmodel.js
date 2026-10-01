import mongoose from "mongoose"
import validator from "validator";


const appointment=new mongoose.Schema({
    firstname:{
        type:String,
        required:true},

        lastname:{
            required:true,
            type:String},
        phone:{
            type:String,
            required:true,
            minlength:[10,"mainimum"],
            maxlength:[11,"maximum"]},
        disease:{
            type:String,
            required:true},
            
            age:{type:Number,
                required:true
            },
        gender:{
            type:String,
            required:true,
            enum:["Male","Female"]},
        date:{
            type:Date,
            required:true,
            validate:{
                validator:function(v){
                return v >= new Date();
            },
            message : 'date'
        }
        }
    
    
    
    
    
})
export const Appoint=mongoose.model("Appoint",appointment)