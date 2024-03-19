const UserSchema = require("../Schema/UserSchema");

const Get = async(req,res)=>{
    const getall = await UserSchema.find();
    res.json(getall)
}

module.exports = Get