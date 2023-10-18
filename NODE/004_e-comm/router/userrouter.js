const router=require("express").Router()
const user=require("../model/users")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

router.post("/",async(req,resp)=>{
    try {
        const User=new user(req.body)
        const data=await User.save()
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

router.get("/",async(req,resp)=>{
    try {
        const data=await user.find()
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

router.get("/:id",async(req,resp)=>{
    try {
        const User=req.params.id
        const data=await user.findById("64770d148c217d5be639202e")
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

router.put("/:id",async(req,resp)=>{
    try {
        const User=req.params.id
        const data=await user.findByIdAndUpdate(User,req.body)
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

router.delete("/:id",async(req,resp)=>{
    try {
        const User=req.params.id
        const data=await user.findByIdAndDelete(User)
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

router.post("/login",async(req,resp)=>{
    try {
        const User=await user.findOne({email:req.body.email})
        const ismatch=await bcrypt.compare(req.body.pass,User.pass)
        if (ismatch) {
            const token=await jwt.sign({_id:User._id},process.env.S_KEY)
            resp.send("auth-token:"+token)
        } else {
            resp.send("invalid credential..!!")
        }
    } catch (error) {
        resp.send("invalid credential..!!")
    }
})

module.exports=router