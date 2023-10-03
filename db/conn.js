const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/student-api",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex:true
}).then(()=>{
    console.log("database connection succesful")
}).catch((error)=>{
    console.log(`databse connection with error ${error}`);
})