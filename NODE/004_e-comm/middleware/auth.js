const jwt=require("jsonwebtoken")
const user=require("../model/users")

const auth=async(req,resp,next)=>{
    const token=req.header("auth-token")
    console.log(token);
    
    try {
        const data=await jwt.verify(token,process.env.S_KEY)
        if (data) {
            const User=await user.findOne({_id:data._id})
            req.User=User;
            next()
        } else {
            resp.send("invalid token..!!")
        }
    } catch (error) {
        resp.send("invalid token..!!")
    }
}

module.exports=auth