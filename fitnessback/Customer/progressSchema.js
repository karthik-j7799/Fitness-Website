const mongoose= require("mongoose");

const Schema=mongoose.Schema({
    cid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'customers'
    },
   

    date:{
        type:Date,
        required:true
    },
    img:{
type:Object
    },
    comment:String
});
module.exports=mongoose.model('custprogresses',Schema)

