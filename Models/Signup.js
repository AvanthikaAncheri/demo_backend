const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const SchemaModel = require('../Schema/LoginSchema');

const Signup = async(req,res) =>{
    const{Name,Email,Password} = req.body;
    const SignupModel = await SchemaModel.findOne({Email})
    if(SignupModel){
        res.json("User already exists");
    }
    else{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(Password,salt);
    
        const Signup1 = await SchemaModel.create({
            Name,Email,Password:hash
        })

        res.json({
            Id : Signup1._id,
            Name: Signup1.Name,
            Email: Signup1.Email,
            Password: Signup1.Password,
            Token:generateToken(Signup1._id)
        })

    }
}

const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'})
}

module.exports = Signup