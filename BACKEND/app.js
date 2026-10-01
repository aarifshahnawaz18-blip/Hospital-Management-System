import express from "express"
import cors from "cors"
import fileupload from "express-fileupload"
import {connectdb} from "./DATABASE/connection.js"
import { messageroute } from "./controller/messagecontroller.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import {appointments} from "./controller/apointcontroller.js"
import { Appointgetbyid } from "./controller/apointcontroller.js";
import { getmessage } from "./controller/messagecontroller.js";
import { Admin } from "./controller/Admincontroller.js";
import { Adminlogin } from "./controller/Admincontroller.js";
const app=express();
const corOption={
    origin:"http://localhost:5173",
    method:"GET,POST,PUT,PATCH",
    credential:true,
}
app.use(cors(corOption))


app.use(express.json());

// Middleware to parse URL-encoded data (if needed)
app.use(express.urlencoded({ extended: true }));


app.use(fileupload({
    usetempfile:true,
    usefiledir:"/tmp/"
}))


connectdb()
app.route("/message").post(messageroute)

app.route("/appointment").post(appointments)
app.route("/getappointment").get(Appointgetbyid)
app.route("/getmessage").get(getmessage)
app.route("/Admincreate").post(Admin)
app.route("/Adminlogin").post(Adminlogin)

app.use(errorMiddleware)

export default app; 

                     
