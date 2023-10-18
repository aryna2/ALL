const mongoose=require("mongoose")
const express=require("express")
const app=express()
require("dotenv").config()
app.use(express.json())

const PORT=process.env.PORT

const DBURL=process.env.DB_URL

mongoose.connect(DBURL).then(()=>{
    console.log("db connected..");
}).catch(err=>{
    console.log(err);
})

app.use("/users",require("../router/userrouter"))
app.use("/categories",require("../router/categoryrouter"))
app.use("/products",require("../router/productrouter"))
app.use("/carts",require("../router/cartrouter"))

app.listen(PORT,()=>{
    console.log("server running on port:"+PORT);
})