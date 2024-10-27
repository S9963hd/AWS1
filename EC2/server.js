let express=require("express");
let app=express();
app.get('/',(req,res)=>{
    res.status(200).json({"name":"AWS"});   
    console.log("Sended");
})
app.listen(3000,()=>console.log("Server Connected"));