const mongoose = require('mongoose')

const MainSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true,
        minlength:4,
    },
    Email:{
        type:String,
        required:true,
        minlength:4,
    },
    Password:{
        type:String,
        required:true,
        minlength:4,
    },
})

const SchemaModel = mongoose.model("SchemaModel",MainSchema);
module.exports = SchemaModel