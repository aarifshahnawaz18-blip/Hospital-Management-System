
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import { ErrorHandler } from "./errorMiddleware.js";
import jwt from "jsonwebtoken"

export const isPatientAuthenticated=catchAsyncErrors(async(req,res,next)=>{
    const token =req.cookies.patientToken;
    if(!token){
        return next(new ErrorHandler ("User is not authenticated",400));
    }
    const decoded = jwt.verify(token,'hjfdiureiufjxkjdseiuu')
    req.user=await User.findById(decoded.id)

    next()

})