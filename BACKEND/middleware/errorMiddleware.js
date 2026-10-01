export class ErrorHandler extends Error{
    constructor (message,statuscode){
        super(message)
        this.statuscode=statuscode;
    }
}

export const errorMiddleware =(err,res,req,next)=>{
    err.massage=err.message || "internal server error"
    err.statuscode=err.statuscode || 500

    if(err.code === 11000){
        const message = `Dublicate ${Object.key(err.keyvalue)}Entered`
        err =new ErrorHandler(message,400);
    }

    if(err.name==="JsonWebTokenError"){
        const message="json Web Token is invalid,try again";
        err=new ErrorHandler(message,400);
    }

    if(err.name==="TokenExpiredError"){
        const message="json Web Token is invalid,try again";
        err=new ErrorHandler(message,400);
    }

    if(err.name==="CastError"){
        const message="Invalid $(err.path)";
        err=new ErrorHandler(message,400);
    }

   

}