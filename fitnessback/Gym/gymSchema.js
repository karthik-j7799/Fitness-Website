const mongoose= require("mongoose");

const gymSchema=mongoose.Schema({
   name:{
        type:String,
        required:true
    },
   
    contact:{
        type:Number,
        required:true
    },
  
    email:{
        type:String,
        unique:true,
        required:true,
       
        dropDups: true
    },
    password:{
        type:String,
        required:true
    },
  regno:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        default:0
    },
    city:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    img:{
        type:Array
    }
});
module.exports=mongoose.model('gyms',gymSchema)

