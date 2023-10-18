const mongoose =require('mongoose')

dburl='mongodb://127.0.0.1:27017/shop'

mongoose.connect(dburl).then(()=>{
    console.log('db connected..!!');
}).catch(error=>{
    console.log(error);
})

const productSchema=new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    qty:{
        type:Number
    }
})

const product=new mongoose.model('product',productSchema)

const addProduct=()=>{

    const prod=new product({name:'pen',price:50,qty:5})
    prod.save().then(result=>{
        console.log(result);
    }).catch(error=>{
        console.log(error);
    })
}                                                     //single data add karva

const addManyProduct=()=>{

    const p1=new product({name:'speaker',price:'5000',qty:10})
    const p2=new product({name:'laptop',price:'50000',qty:10})
    const p3=new product({name:'mouse',price:'500',qty:11})

    product.insertMany([p1,p2,p3]).then(result=>{
        console.log(result);
    }).catch(error=>{
        console.log(error);
    })
}                                                             //ak sathe vadhare data add karva

const viewProducts=async()=>{
    try{
        const data=await product.find()
        console.log(data);
    }catch(error){
        console.log(error);
    }
}                                     //data read karva

const updateProduct=async()=>{
    try{
        const data=await product.findByIdAndUpdate
        ('6468b89b9ca2e0d5903803c3',{price:55000})
        console.log(data);
    }catch(error){
        console.log(error);
    }
}                                                //single data update karva

const deleteProduct=async()=>{
    try{
        const data=await product.findByIdAndDelete
        ('6468b445ae9ac0bbbebcd881')
        console.log(data);
    }catch(error){
        console.log(error);
    }
}                                                //single data delete karva

const updateManyProduct=async()=>{
    try{
        const data=await product.updateMany({price:{$gt:500}},{qty:50})
        console.log(data);
    }catch(error){
        console.log(error);
    }
}                                                                      //ak sathe vadhare data update karva

const deleteManyProduct=async()=>{
    try{
        const data=await product.deleteMany({name:'pen'})
        console.log(data);
    }catch(error){
        console.log(error);
    }
}                                                        //ak sathe vadhare data delete karva

// addProduct()
// addManyProduct()
// viewProducts()
// updateProduct()
// deleteProduct()
// updateManyProduct()
// deleteManyProduct()