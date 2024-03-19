const UserSchema = require("../Schema/UserSchema");


const Deletepg = async(req,res)=>{
    const _id = req.params.id;
    const Delete = await UserSchema.findByIdAndDelete(_id)
    res.json("User Deleted")
}

module.exports = Deletepg