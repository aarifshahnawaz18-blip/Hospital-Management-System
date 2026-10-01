import mongoose from "mongoose"

export const connectdb=() =>{
    mongoose.connect("mongodb+srv://aarifshahnawaz18db:Zoya786786@cluster0.x8c181n.mongodb.net/?appName=Cluster0")

.then(()=>{
    console.log("database Connection Successfully")
})

.catch((err)=>{
    console.log("Database  Connection Error")
})
}
//lNlPsKTpzSuE0ZGN