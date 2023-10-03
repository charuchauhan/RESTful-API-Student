const mongoose=require("mongoose");
const validator=require("validator");
const StudentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    phone:{
        type:Number,
        required:true,
        minlength:10,
        unique:true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("Invalid error")
        }
    }
})
const Student= new mongoose.model("Student",StudentSchema)
module.exports=Student;