const mongoose=require("mongoose");

const Student=mongoose.model('Student',{
    name:{type:String},
    gender:{type:String},
    email:{type:String},
    phone:{type:String},
    password:{type:String}
})

module.exports={Student}