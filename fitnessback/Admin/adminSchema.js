const mongoose= require("mongoose");
    
const Schema=mongoose.Schema({
   username:{
    type:String,
    default:"admin"
    },
    password:{
        type:String,
        default:"admin12345"
    }
});
module.exports=mongoose.model('admins',Schema)

