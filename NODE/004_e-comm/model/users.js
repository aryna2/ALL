const mongoose=require("mongoose")
const bcrypt=require("bcrypt")

const userSchema=new mongoose.Schema({
    uname:{
        type:String
    },
    email:{
        type:String
    },
    pass:{
        type:String
    },
    phone:{
        type:Number
    }
})

userSchema.pre("save",async function(){
    try {
        this.pass=await bcrypt.hash(this.pass,10)
    } catch (err) {
        console.log(err);
    }
})

module.exports=new mongoose.model("user",userSchema)