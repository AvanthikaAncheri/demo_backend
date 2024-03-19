const UserSchema = require("../Schema/UserSchema");


const Update = async(req,res) =>{
    const{productImg,productName,Price} = req.body;
    const _id = req.params.id;
    const updateall = await UserSchema.findByIdAndUpdate(_id,{productImg,productName,Price})
    res.json(updateall)
}

module.exports = Update