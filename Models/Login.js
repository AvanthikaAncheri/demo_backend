const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const SchemaModel = require('../Schema/LoginSchema');

const Login = async(req,res) =>{
    const{Email,Password} = req.body;
    const LoginModel = await SchemaModel.findOne({Email})
    if(LoginModel && bcrypt.compare(Password,LoginModel.Password)){
        res.json({message:"Login Succesful",Tokengenerate:generateToken(LoginModel._id)})
    }
    else{
        res.json("Failed");
    }
}
 
const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_secret,{expiresIn:"1d"})
}

module.exports = Login