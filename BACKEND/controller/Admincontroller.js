

import { admindata } from "../model/Adminmodel.js"

export const Admin=async(req,res)=>{
  try{
    console.log(req.body)
    const {name,password}=req.body

    const create=await admindata.create({
        name,
        password
    })
    if (create){
        res.status(200).send({message:"Admin Create Successfully"})
    }
}catch(error){
    res.status(500).json({message:"error are internal",error})
}
}


export const Adminlogin= async(req,res)=>{
      console.log(req.body)
      try{
      const login=await admindata.find({})

      if(login){
        res.status(200).send({message:"Admin login successfully"})
      }
    }catch(error){
        res.status(500).send({message:"internal server error"})
    }
}