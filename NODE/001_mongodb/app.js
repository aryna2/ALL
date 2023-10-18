const mongo=require('mongodb')
const mongoClient=mongo.MongoClient

const dburl='mongodb://127.0.0.1:27017'
const database='tops'

mongoClient.connect(dburl).then(result=>{
    // console.log('connected..!!');   //url connect thy k ny a jova mate
    
    const mydb=result.db(database)
    console.log('db connected..!!');
    
    // mydb.createCollection('emp').then(result=>{
    //     console.log('collection created..!!');
    // }).catch(error=>{
    //     console.log(error);
    // })                                         //collection create karva

    // const emp1={name:'jatin',email:'jatin@gmail.com'}
    // mydb.collection('emp').insertOne({emp1}).then(result=>{
    //     console.log(result);
    // }).catch(error=>{
    //     console.log(error);
    // })                                                     //collection ma single data add karva

    // const emp1={name:'jatin',email:'jatin@gmail.com',dept:'java',sal:11000}
    // const emp2={name:'aryan',email:'aryan@gmail.com',dept:'testing',sal:12000}
    // const emp3={name:'rutvik',email:'rutvik@gmail.com',dept:'php',sal:13000}
    // mydb.collection('emp').insertMany([emp1,emp2,emp3]).then(result=>{
    //     console.log(result);
    // }).catch(error=>{
    //     console.log(error);
    // })                                                                        //collection ma ak sathe vadhare data add karva

    // mydb.collection('emp').find().toArray().then(result=>{
    //     console.log(result);
    // }).catch(error=>{
    //     console.log(error);
    // })                                                    //collection na data read karva     

    // mydb.collection('emp').find({name:'aryan'}).toArray().then(result=>{
    //     console.log(result);
    // }).catch(error=>{
    //     console.log(error);
    // })                                                                  //single data read karva                                                    

    // mydb.collection('emp').find({},{projection:{name:1,email:1,_id:0}}).toArray().then(result=>{
    //     console.log(result);
    // }).catch(error=>{
    //     console.log(error);
    // })                                                                                          //selected data joyta hoy tyre                        

    // mydb.collection('emp').find({sal:{$gt:12000}}).toArray().then(result=>{
    //     console.log(result);
    // }).catch(error=>{
    //     console.log(error);
    // })                                                                     //condition mukine selected data joyta hoy tyre

    // mydb.collection('emp').find({$and:[{sal:{$lt:12000}},{dept:'java'}]}).toArray().then(result=>{
    //     console.log(result);
    // }).catch(error=>{
    //     console.log(error);
    // })                                                                                            //and or no use karine data joyta hoy tyre            

    // mydb.collection('emp').findOne({name:'jatin'}).then(result=>{
    //     console.log(result.email);
    // }).catch(error=>{
    //     console.log(error);                                      
    // })                                                           //aagal kryu a find ma data array ma ave temathi particular data na ly sakiye a findone ma ly skiye

    // mydb.collection('emp').updateOne({name:'jay'},{$set:{email:'abc@gmail.com'}},{upsert:true}).then(result=>{
    //     console.log(result);
    // }).catch(error=>{
    //     console.log(error);
    // })                                                                                                        //single data update karva             

    // mydb.collection('emp').updateMany({name:'jatin'},{$set:{email:'jatin1@gmail.com'}},{upsert:true}).then(result=>{
    //     console.log(result);
    // }).catch(error=>{
    //     console.log(error);
    // })                                                                                                              //ak sathe vadhare data update karva
                

    // mydb.collection('emp').deleteOne({},{name:'aryan'}).then(result=>{
    //     console.log(result);
    // }).catch(error=>{
    //     console.log(error);
    // })                                                           //single data delete karva

    // mydb.collection('emp').deleteMany({name:'jatin'}).then(result=>{
    //     console.log(result);
    // }).catch(error=>{
    //     console.log(error);
    // })                                                              //ak sathe vadhare data delete karva

}).catch(error=>{
    console.log(error);
})