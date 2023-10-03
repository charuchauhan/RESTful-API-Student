const express=require("express")
require("./db/conn")
const Student=require("./models/student")
const app=express();
const port=3000
app.use(express.json())

//create student document
app.post("/students",(req,res)=>{
    const user=new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((error)=>{
        res.status(400).send("error occured");
    })
})

// get data of student
app.get("/students",async(req,res)=>{
    try{
        const studentsData=await Student.find();
        res.status(201).send(studentsData);
    }
    catch(err){
        res.status(404).send();
    }
})

// get data of requested student by id
app.get("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const studentData=await Student.findById(_id);
        if(!studentData) res.status(404).send();
        else res.status(201).send(studentData);
    }
    catch(err){
        res.status(404).send();
    }
})

//update data with id
app.patch("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updateStudents=await Student.findByIdAndUpdate(_id,req.body,{new : true});
        res.status(201).send(updateStudents);
    }
    catch(err){
        res.status(404).send(err);
    }
})

//delete by id
app.delete("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const deleteStudents=await Student.findByIdAndDelete(_id);
        if(!_id) return res.status(400).send();
        res.status(201).send(deleteStudents);
    }
    catch(err){
        res.status(500).send(err);
    }
})
app.listen(port,(req,res)=>{
    console.log("sever is listening")
})