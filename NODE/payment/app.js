const express=require("express")
const app=express()
const Razorpay=require("razorpay")
const PORT=9000
var cors = require('cors')
app.use(cors())

app.get("/payment",(req,resp)=>{
    const amt=req.query.amt
    const Razorpay = require('razorpay');
    var instance = new Razorpay({ key_id: 'rzp_test_D8tPFLfczfnnK6', key_secret: 'i59j2xt83PRaYffVT2t1rfl6' })

    var options = {
        amount: Number(amt)*100,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11"
    };
    instance.orders.create(options, function(err, order) {
    resp.send(order)
    });
})

app.listen(PORT,()=>{
    console.log("server running on port :" + PORT);
}) 