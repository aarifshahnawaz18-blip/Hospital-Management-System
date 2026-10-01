import { messagesend } from "../model/messagemodel.js"



export const messageroute = async (req, res, next) => {
    try {
        console.log(req.body);

        const { name, phone, message } = req.body;

        // Check if all required fields are provided
        if (!name || !phone || !message) {
            return res.status(400).json({ message: "Please fill all fields" });
        }

        // Check if the message already exists
        const messagematch = await messagesend.findOne({ message });
        if (messagematch) {
            return res.status(400).json({ message: "The same message can only be sent once" });
        }

        // Create a new message entry
        const send = await messagesend.create({
            name,
            phone,
            message,
        });

        // Send a success response if message is created
        if (send) {
            return res.status(200).json({ message: "Message sent successfully" });
        } else {
            return res.status(500).json({ message: "Failed to send the message" });
        }
    } catch (error) {
        // Handle errors and send an error response
        console.error("Error in messageroute:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getmessage=async(req,res)=>{
    try{
    const messageget=await messagesend.find({})

    if(!messageget || messageget==0 ){
        res.status(404).json({message:"Data not awailable"})
    }

    res.status(200).json({
        message:"Message Get Successfully",
        data:messageget
    })
}catch(error){
    res.status(500).json({message:"internal server errror"})
}
    }
