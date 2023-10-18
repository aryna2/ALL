const router=require("express").Router()
const student=require("../model/student")

router.get('/students',async(req,resp)=>{
    try{
        const data=await student.find()
        resp.send(data)
    } catch (err){
        resp.send(err)
    }
})

router.post('/students',async(req,resp)=>{
    try {
        const std=new student(req.body)
        const data=await std.save()
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

router.put('/students/:id',async(req,resp)=>{
    const _id=req.params.id
    try {
        const data=await student.findByIdAndUpdate(_id,req.body)
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

router.delete('/students/:id',async(req,resp)=>{
    const _id=req.params.id
    try {
        const data=await student.findByIdAndDelete(_id)
        resp.send(data)
    } catch (err) {
        resp.send(err)
    }
})

router.post('/login',async(req,resp)=>{
    try{
        const user=await student.findOne({email:req.body.email})
        const isMatch=await bcrypt.compare(req.body.pass,user.pass)
        if(isMatch){
            resp.send('welcome:'+user.name)
        }else{
            resp.send('invalid credentials..!!')
        }
    }catch(err){
        resp.send('invalid credentials..!!')
    }
})

module.exports=router