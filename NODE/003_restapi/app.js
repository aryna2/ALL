const express=require('express')
const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const app=express()
const PORT=3000
const url='mongodb://127.0.0.1:27017/restapi'

mongoose.connect(url).then(()=>{
    console.log('db connected..!!');
}).catch(err=>{
    console.log(err);
})

app.use(express.json())

app.use("/",require("./router/studentrouter"))

app.listen(PORT,()=>{
console.log('server running on port:' + PORT);
})