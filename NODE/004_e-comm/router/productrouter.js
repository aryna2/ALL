const router=require("express").Router()
const mongoose=require("mongoose")
const category=require("../model/categories")
const product=require("../model/products")

router.post("/",async(req,resp)=>{
    try {
        const User=new product(req.body)
        const data=await User.save()
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

router.get("/",async(req,resp)=>{
    try {
        const data=await product.aggregate([{$lookup:
            {from:"categories",localField:"catid",foreignField:"_id",as:"category"}}])
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

router.get("/:id",async(req,resp)=>{
    try {
        const User=new mongoose.Types.ObjectId(req.params.id)

        const data=await product.aggregate([{$match:{_id:User}},{$lookup:
            {from:"categories",localField:"catid",foreignField:"_id",as:"category"}}])
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

router.get("/categories/:id",async(req,resp)=>{
    try {
        const User=new mongoose.Types.ObjectId(req.params.id)
        
        const data=await product.aggregate([{$match:{catid:User}},{$lookup:
            {from:"categories",localField:"catid",foreignField:"_id",as:"category"}}])
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

router.put("/:id",async(req,resp)=>{
    try {
        const User=req.params.id
        const data=await product.findByIdAndUpdate(User,req.body)
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

router.delete("/:id",async(req,resp)=>{
    try {
        const User=req.params.id
        const data=await product.findByIdAndDelete(User)
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

module.exports=router