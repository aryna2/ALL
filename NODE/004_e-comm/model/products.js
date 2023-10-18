const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    pname:{
        type:String
    },
    price:{
        type:Number
    },
    qty:{
        type:Number
    },
    catid:{
        type:mongoose.Types.ObjectId
    }
})

module.exports=new mongoose.model("product",productSchema)