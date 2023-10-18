const router=require("express").Router()
const category=require("../model/categories")

router.post("/",async(req,resp)=>{
    try {
        const User=new category(req.body)
        const data=await User.save()
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

router.get("/",async(req,resp)=>{
    try {
        const data=await category.find()
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

router.get("/:id",async(req,resp)=>{
    try {
        const User=req.params.id
        const data=await category.findById("64770d778c217d5be6392035")
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

router.put("/:id",async(req,resp)=>{
    try {
        const User=req.params.id
        const data=await category.findByIdAndUpdate(User,req.body)
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

router.delete("/:id",async(req,resp)=>{
    try {
        const User=req.params.id
        const data=await category.findByIdAndDelete(User)
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

module.exports=router