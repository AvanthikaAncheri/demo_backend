const UserSchema = require("../Schema/UserSchema");


const GetSingle = async(req,res) => {
    const _id = req.params.id;
    const getid = await UserSchema.findById(_id)
    res.json(getid)
}

module.exports = GetSingle