const express = require('express')
const app = express()



app.get('/weather', (req, res) => {
    if(!req.query.addree){
        res.send('kindly provide query string')
    }
    res.send({
        forecast:'it is sunny day'
    })
   })

   app.get('/product',(req,res)=>{
       res.send({
           name:[]
       })
   })


   app.listen(3000,()=>{
       console.log('server is working');
   })