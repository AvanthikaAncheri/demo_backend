const UserSchema = require("../Schema/UserSchema");

const Create = async(req,res)=>{
    const{productImg,productName,Price} = req.body;
    const Details = await UserSchema.create(
        {productImg,productName,Price}
    )
    res.json(Details)
}

module.exports = Create

