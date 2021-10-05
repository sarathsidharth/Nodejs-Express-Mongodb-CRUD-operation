const express=require('express');
const {ObjectId}=require('mongodb');
const router=express.Router();

const {Student} =require('../model/student')

router.get('/',(req,res)=>{
    Student.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log("Error in retreiving the File : "+JSON.stringify(err))
        }
    })
})

router.post('/',(req,res)=>{
    const stud=new Student({
        name:req.body.name,
        gender:req.body.gender,
        email:req.body.gender,
        phone:req.body.phone,
        password:req.body.password
    })
    stud.save((err,docs)=>{
        if(!err) {res.send(docs);}
        else{console.log("error in inserting the file "+JSON.stringify(err))}
    })
})

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.send(`no record with given id: ${req.params.id} ` );

    Student.findById(req.params.id,(err,doc)=>{
        if(!err) {res.send(doc);}
        else {  console.log('Error in finding the person :'+ JSON.stringify(err)) }
    });
});

router.put('/:id',(req,res)=>{
    const id=req.params.id;
    if(!ObjectId.isValid(id))
        return res.send(`no record with given id : ${req.params.id}`);
    const stud={
        name:req.body.name,
        gender:req.body.gender,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password
    };
    Student.findByIdAndUpdate(id,stud,{new:true},(err,doc)=>{
        if(!err) {res.send(doc);}
        else { console.log('error in updating the person :')+JSON.stringify(err)}
    })
})

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.send(`no record with given id : ${req.params.id}`);
    Student.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){ res.send(doc)}
        else{ console.log('error in deleting the person :')+JSON.stringify(err)}
    })
})

module.exports=router;