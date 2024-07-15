import express from "express";
import cors from "cors";


const app =express() //  express its a framework 
app.use(cors()) // domain => eg: flipkart
const port = 4000

app.get("/first",(req,res)=>{
    res.status(200).json({message:"Hello from first API AFTER DEPLOY"})
})


app.listen(port ,()=>{
    console.log("Application is working on a port" , port);

})