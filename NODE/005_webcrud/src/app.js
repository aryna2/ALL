const express=require("express")
const app=express()
const mongoose=require("mongoose")
const hbs=require("hbs")
const path=require("path")
require("dotenv").config()
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
var cookieParser=require("cookie-parser")
app.use(cookieParser())
const PORT=process.env.PORT
const DB_URL=process.env.DB_URL

mongoose.connect(DB_URL).then(()=>{
    console.log("db connected..");
}).catch(err=>{
    console.log(err);
})

app.listen(PORT,()=>{
    console.log("server is running on port :" + PORT);
})

const publicPath=path.join(__dirname,"../public")
const partialPath=path.join(__dirname,"../templates/partials")
const viewPath=path.join(__dirname,"../templates/views")

hbs.registerPartials(partialPath)
app.set("view engine","hbs")
app.set("views",viewPath)
app.use(express.static(publicPath))

app.use("/",require("../router/userrouter"))