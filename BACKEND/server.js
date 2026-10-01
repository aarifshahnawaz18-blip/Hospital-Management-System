import app from "./app.js"
import {config} from "dotenv"
import cloudinary from "cloudinary"

cloudinary.v2.config({
    cloud_name: 'dp7wmdvnu',
    api_key:'216455454344752',
    api_secret:'wgaKXln6m_KsOcGgX90cXoipwMY'
})

config({path:"./config/config.env"})
app.listen(5000,()=>{
    console.log("Running")
})




                 


