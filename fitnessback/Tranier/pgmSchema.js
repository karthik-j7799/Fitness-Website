const mongoose= require("mongoose");

const Schema=mongoose.Schema({
   title:{
        type:String,
        required:true
    },
    
   trainerid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'trainers'
   },
    
  date:{
type:Date
  },
  category:{
    type:String,
    required:true
  },
    description:{
        type:String,
        required:true
    },
  review:{
        type:Array
    
  },
  isactive:{
    type:Boolean,
    default:false
  },
  rating:{
    type:Number,
    default:0
  }
});
module.exports=mongoose.model('programs',Schema)

