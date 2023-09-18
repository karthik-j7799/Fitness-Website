const admin=require('./adminSchema')
const contactSchema = require('./contactSchema')


//forgotvPawd Customer by id
const changeUserCredentials=(req,res)=>{

  
    
    admin.findOneAndUpdate({username:req.body.username,password:req.body.password},{
        username:req.body.username,
      password:req.body.password
      })
  .exec().then(data=>{
    if(data!=null)
    res.json({
        status:200,
        msg:"Updated successfully"
    })
    else
    res.json({
      status:500,
      msg:"Please enter Valid credentials !!"
     
  })
  }).catch(err=>{
    console.log(err);
    res.json({
        status:500,
        msg:"Data not Updated",
        Error:err
    })
  })
  }



  const contactAdmin =(req,res)=>{
    const newContact=new contactSchema({
    name:req.body.name,
    email:req.body.email,
    msg:req.body.msg
  })
  newContact.save().then(data=>{
    res.json({
        status:200,
        msg:"Inserted successfully",
        data:data
    })
}).catch(err=>{
   
      res.json({
          status:500,
          msg:"Please enter all the mandatory fields",
          Error:err
      })
    
  })
}
  
// view cust by id
const viewContacts=(req,res)=>{
  
  contactSchema.find({}).exec()
  .then(data=>{

    res.json({
        status:200,
        msg:"Data obtained successfully",
        data:data
    })
  
}).catch(err=>{
  console.log(err);
    res.json({
        status:500,
        msg:"No Data obtained",
        Error:err
    })
})

}
  module.exports={changeUserCredentials,contactAdmin,viewContacts}
  
  