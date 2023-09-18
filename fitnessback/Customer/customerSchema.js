const mongoose= require("mongoose");

const customerSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    age:{
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
    district:{
        type:String,
        required:true
    },gender:{
        type:String,
        required:true
    },
    dateofjoin:{
        type:Date,
        required:true
    },
    weight:Number,
    height:Number
});
module.exports=mongoose.model('customers',customerSchema)    

