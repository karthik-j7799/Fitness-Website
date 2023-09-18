const mongoose= require("mongoose");

const doctorSchema=mongoose.Schema({
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
  certificate:{
        type:String,
        required:true
    },
    aadhar:{
        type:Number,
        required:true
    }, rating:{
        type:Number,
        default:0,
    },
    specialization:{
        type:String,
        required:true
    },
    isactive:{
        type:Boolean,                  //admin approval
        default:false
    }
});
module.exports=mongoose.model('doctors',doctorSchema)

