const router=require("express").Router()
const User=require("../model/user")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const auth=require("../middleware/auth")
const multer=require("multer")
const fs=require("fs")

const storageEngine=multer.diskStorage({
    destination:"./public/img",
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}--${file.originalname}`)
    }
})

const upload=multer({
    storage:storageEngine
})

router.get("/register",(req,resp)=>{
    resp.render("register")
})

router.get("/login",(req,resp)=>{
    resp.render("login")
})

router.post("/do_register",upload.single("file"),async(req,resp)=>{
    try {
        const user=new User({uname:req.body.uname,email:req.body.email,pass:req.body.pass,img:req.file.filename})
        const udata=await user.save()
        console.log(udata);

        resp.render("register",{msg:"Registration succesfully done.."})
    } catch (error) {
        console.log(error);
    }
})

router.get("/viewuser",auth,async(req,resp)=>{
    try {
        const data=await User.find()
        resp.render("viewuser",{userdata:data})
    } catch (error) {
        console.log(error);
    }
})

router.get("/deleteuser",async(req,resp)=>{
    try {
        const id=req.query.uid
        const udata=await User.findByIdAndDelete(id)

        fs.unlinkSync("public/img/"+ udata.img)

        resp.redirect("viewuser")
    } catch (error) {
        console.log(error);
    }
})

router.get("/updateuser",async(req,resp)=>{
    try {
        const id=req.query.uid
        const data=await User.findOne({_id:id})
        resp.render("updateuser",{data:data})
    } catch (error) {
        console.log(error);
    }
})

router.post("/do_update",upload.single("file"),async(req,resp)=>{
    try {
        const id=req.body.id
        const udata=await User.findByIdAndUpdate(id,{uname:req.body.uname,email:req.body.email,pass:req.body.pass,img:req.file.filename})
        
        fs.unlinkSync("public/img/"+ udata.img)
        
        resp.redirect("viewuser")
    } catch (error) {
        console.log(error);
    }
})

router.post("/do_login",async(req,resp)=>{
    try {
        const user=await User.findOne({email:req.body.email})

        if (user.Tokens.length>=1) {
            resp.render("login",{err:"Max user limit reached !!"})
            return
        }
        const isValid=await bcrypt.compare(req.body.pass,user.pass)

        if (isValid) {
            const token=await user.generateToken()

            resp.cookie("jwt",token)
            resp.redirect("viewuser")
        } else {
            resp.render("login",{msg:"invalid credentials !!"});
        }
    } catch (error) {
        resp.render("login",{msg:"invalid credentials !!"});
    }
})

router.get("/logout",auth,async(req,resp)=>{
    try {
        const user=req.user
        const token=req.token

        user.Tokens=user.Tokens.filter(ele=>{
            return ele.token!=token
        })
        
        user.save()

        resp.clearCookie("jwt")
        resp.redirect("login")
    } catch (error) {
        console.log(error);
    }
})

router.get("/logout_all",auth,async(req,resp)=>{
    try {
        const user=req.user
        const token=req.token

        user.Tokens=[]
        
        user.save()

        resp.clearCookie("jwt")
        resp.redirect("login")
    } catch (error) {
        console.log(error);
    }
})

module.exports=router 