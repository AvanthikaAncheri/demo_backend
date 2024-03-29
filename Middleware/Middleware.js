const jwt = require('jsonwebtoken')

const Protect = async(req,res,next) =>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token = req.headers.authorization.split(" ")[1];
            jwt.verify(token,process.env.JWT_SECRET)
            next()
        }
        catch(err){
          res.status(401).send("NO Token")  
        }
    }
    if(!token){
        res.status(401).send("NO Token")
    }
}

module.exports = Protect