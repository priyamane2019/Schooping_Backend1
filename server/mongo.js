const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://manepriya:Priya8888@1stmongopro.8raxm.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("MongonDB Connected");
})
.catch(()=>{
    console.log("Mongodb connection false");
})

const newSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
})

const collection=mongoose.madel("RegisterData", newSchema)
module.exports=collection