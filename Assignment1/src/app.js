const express=require('express')
const path = require('path') 
const hbs = require('hbs') 
const app =express()

const publicDirectoryPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../views/partials')
hbs.registerPartials(partialsPath) 

app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs')


app.get('', (req, res) => {     
    res.render('index', 
    {         
        title: 'Hello',         
        name: 'Priya'     
    }) 
}) 

app.get('/calculator', (req, res) => {     
    res.render('calculator', 
    {         
        title: 'Hello',         
        name: 'Priya'     
    }) 
}) 

app.get('/student', (req, res) => {     
    res.render('student', 
    {         
        title: 'Hello',         
        name: 'Priya'     
    }) 
}) 
 
app.listen(3000,()=>{
    console.log('server is running on port 3000')
})