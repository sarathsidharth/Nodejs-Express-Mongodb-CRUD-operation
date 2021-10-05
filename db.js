const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/cruddb",(err)=>{
    if(!err){console.log("connection succeed")}
    else{console.log("error in db",JSON.stringify(err))}
})

