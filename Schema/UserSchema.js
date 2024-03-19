const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    productImg:{
        type:String,
        required:true,
        minlength:4,
    },
    productName:{
        type:String,
        required:true,
        minlength:4,
    },
    Price:{
        type:Number,
        required:true,
        minlength:4,
    }
})

const UserSchema = mongoose.model("UserSchema",Schema);
module.exports = UserSchema
