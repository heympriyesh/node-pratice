
const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;

const connectionURL='mongodb://127.0.0.1:27017'
const database='task-manager';

MongoClient.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology:true}, (error,client)=>{
        if(error){
           return console.log("Unable to Connect")
        }
        console.log('Connected Successfuly')
        const db=client.db(database);

        // db.collection('users').insertOne({
        //     name:'Priyesh',
        //     age:27
        // },(error,result)=>{
        //     if(error){
        //         return console.log("Unable ot insert user");
        //     }
        //     console.log(result.ops)
        // })
    //     db. collection('users').insertMany([{
    //         name:'pp',
    //         age:28
    //     },
    // {
    //     name:'Maswimal',
    //     age:7
    // }])
    // db.collection('users').find({age:27}).toArray((error,users)=>{
    //     console.log(users)
    // })
    
})
 