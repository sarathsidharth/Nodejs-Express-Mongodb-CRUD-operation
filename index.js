const express=require('express');
const {mongoose}=require("./db");
const bodyParser=require('body-parser')

const app=express();
app.use(bodyParser.json())

// app.use('/',(req,res)=>{res.send("hi");})
const studentController=require('../studentdbServer/controller/studentController');
app.use('/students',studentController);

const PORT=3000;
app.listen(PORT,()=>{console.log(`server started at PORT :${PORT}`)})