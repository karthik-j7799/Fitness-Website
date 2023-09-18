const mongoose= require("mongoose");

const trainerSchema=mongoose.Schema({
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
 
    aadhar:{
        type:Number,
        required:true
    }, rating:{
        type:Number,
        default:0
       
    },gender:{
        type:String,
        required:true
    },age:{
        type:Number,
        required:true
    },certificate:{
        type:Object
    },isactive:{
        type:Boolean,
        default:false
    }
});
module.exports=mongoose.model('trainers',trainerSchema)

