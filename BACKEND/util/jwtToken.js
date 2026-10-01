
export const generateToken=async(user,statusCode,message,res)=>{
try{
  const token =await  user.generateJsonWebToken();
  const cookieName=await user.Email  === 'patientToken'

  res.status(statusCode)
      .cookie(cookieName,token,{

    expires:new Date(
        Date.now() + 7 *24 * 60 *60 * 1000 ),
        httpOnly: true
  })
    .json({
      success: true,
      message,
      user,
      token
    })
    
  }catch(error){
    console.error("not generate token ",error)
    
  }
  
  }

