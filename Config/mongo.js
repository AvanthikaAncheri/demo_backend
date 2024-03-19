const mongoose = require('mongoose')

const connection = async() => {
    try{
        const connections = await mongoose.connect("mongodb+srv://avanthikancheri:avanthika@cluster0.jxzgkgk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Database Connected")
    }
    catch(err){
       console.log(`Error:${err}`)
       process.exit()
    }
}

module.exports = connection

