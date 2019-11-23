const {MongoClient,ObjectID} = require('mongodb');
//const MongoClient = mongodb.MongoClient;
 
const connectionURL = 'mongodb://127.0.0.1:27017' 
const databaseName = 'task-manager' 
 
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {     
    if (error) {        
         return console.log('Unable to connect to database!')   
          } 
 
    const db = client.db(databaseName)  

    //db.collection('users').insertOne({     name: 'Andrew',     age: 27 }) 

   /* db.collection('tasks').insertMany([     
        {         
            description: 'Clean the house', completed: true     
        },
        {         
            description: 'Renew inspection',completed: false    
         } ], (error, result) => {    
              if (error) {         
                  return console.log('Unable to insert tasks!')   
                  } 
 
                console.log(result.ops)
             }) */
             db.collection('users').findOne({_id:new ObjectID("5dd425f78093593534a900e5")},(error,user)=>{
                 if(error){
                     console.log('Not able to find user')
                 }
                 console.log(user)

             })
        })
