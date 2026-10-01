
import { User } from "../model/usermodel.js"
import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js"
import { generateToken } from "../util/jwtToken.js"




export const register=catchAsyncErrors(async(res,req)=>{
    console.log(req.body)
    const{firstName,lastName,Phone,Email,Role}=req.body

    if(!firstName || !lastName|| !Phone || !Email || !Role)(
        res.send({message:"fill properly"})
    )
    

    const userexist=await User.findOne({Email},{Phone})
    if(userexist){
        res.send({message:"user allready exist please login"})
    }

   const user=await User.create({
        firstName,
        lastName,
        Phone,
        Email,
        Role,
    })
   generateToken(user,"You Are Successfully",200,res)
    
    
})

export const login=catchAsyncErrors(async(res,req)=>{

    console.log(req.body)
    con
       
    

} )


export const logout=catchAsyncErrors(async(req,res)=>{
    res
        .status(201)
        .cookie("patientToken",{
            httpOnly: true,
            expires:new(Date.now()),
        })
        .json({
            success:true,
            message:"patient logged Out Successfully"
        })
        
})


