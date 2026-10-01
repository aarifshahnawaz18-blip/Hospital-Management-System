
import { Appoint } from "../model/appointmodel.js";


export const appointments=(async(req,res)=>{
try{
console.log(req.body)

const{firstname,lastname,phone,disease,age,gender,date}=req.body

if(!firstname || !lastname || !phone || !disease || !age || !gender || !date ){
    res.json(404).send({message:"fill al field"})
}

const appointexist=await Appoint.findOne({phone,date})

if(appointexist){
    res.json(400).send({message:"appointment allready book",date})
}

const appointment=await Appoint.create({
     firstname,
     lastname,
     phone,
     disease,
     age,
     gender,
     date
})

if(appointment){
    res.status(200).send({message:"appointment are book successfull"})
}

}catch(error){
    res.status({message:"errror in book appointment"})
}
 })
 export const Appointgetbyid = async (req, res) => {
    try {
        // Fetch all appointments
        const appointments = await Appoint.find({});

        // Check if data exists
        if (!appointments || appointments.length === 0) {
            return res.status(404).json({ message: "No appointments found" });
        }

        // Send all appointment data
        return res.status(200).json({ 
            message: "Appointments retrieved successfully", 
            data: appointments 
        });
    } catch (error) {
        // Handle any server errors
        return res.status(500).json({ message: "An error occurred", error: error.message });
    }
};
