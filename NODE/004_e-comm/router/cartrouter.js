const router=require("express").Router()
const cart=require("../model/carts")
const auth=require("../middleware/auth")

router.post("/addtocart",auth,async(req,resp)=>{
    try {
        const User=req.User
        const Cart=new cart({uid:User._id,pid:req.body.pid})
        const data=await Cart.save()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/viewcart",auth,async(req,resp)=>{
    try {
        const User=req.User

        const data=await cart.aggregate([{$match:{uid:User._id}},{$lookup:{
            from:"users",localField:"uid",foreignField:"_id",as:"user"}},{$lookup:{
                from:"products",localField:"pid",foreignField:"_id",as:"product"
            }}])
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.put("/:id",async(req,resp)=>{
    try {
        const User=req.params.id
        const data=await cart.findByIdAndUpdate(User,req.body)
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

router.delete("/:id",async(req,resp)=>{
    try {
        const User=req.params.id
        const data=await cart.findByIdAndDelete(User)
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

module.exports=router