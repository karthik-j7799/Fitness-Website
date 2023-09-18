const express=require('express')
const bodyParser=require('body-parser')
const db=require('./DBConnection')
const app=express()
const cors=require('cors')
const multer=require('multer')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/upload`));

app.use(cors())
const route=require('./routes')
app.use('/health_empire_api',route)

app.listen(4002,()=>{
    console.log("Server created successfully");
})