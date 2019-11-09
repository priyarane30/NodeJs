const express=require('express')
const path = require('path') 
const hbs = require('hbs') 
var bodyParser = require('body-parser');
//var calc = require('./routes/calculator');
//var calculatorfun = require('./calculator');

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/*app.use(express.static("public"));
app.use('/calculator', calc);
module.exports = app;*/

/*app.get('/calculator', (req, res) => {     
    var myText = req.query.mytext; //mytext is the name of your input box
    if(myText !=undefined)
    res.send('Your Text:' +myText); 
   /* res.render('calculator', 
    {         
        title: 'Hello',         
        name: 'Priya'     
    }) */
//}) 


/*app.get('/student', (req, res) => {     
    res.render('student', 
    {         
        title: 'Hello',         
        name: 'Priya'     
    }) 
}) */

app.get('/calculator', function (req, res) {
    res.render('calculator', 
    {         
           
    }) 
});

app.post('/submit-calculate-data', function (req, res) {
    var inputValue = req.body.cal;
    var num1 = parseInt(req.body.firstNo)
    var num2 = parseInt(req.body.secondNo)
    switch(inputValue) {
        case 'add':
            var sum = (num1 + num2).toString();
            res.render('calculator', 
            {         
                result: sum
                    
            }) 
        break;
        case 'substract':
                var sum = (num1 - num2).toString();
                res.render('calculator', 
                {         
                    result: sum
                        
                }) 
        break;
        case 'multi':
                var sum = (num1 * num2).toString();
                res.render('calculator', 
                {         
                    result: sum
                        
                }) 
        break;
        case 'division':
                var sum = (num1 / num2).toString();
                res.render('calculator', 
                {         
                    result: sum
                        
                }) 
        break;
         default:
    }
/*if (inputValue == "add"){
    
    var sum = (num1 + num2).toString()
    
   // res.send( ' Addition'+sum);
    res.render('calculator', 
    {         
        result: sum
            
    }) 
}*/


});

// when Add  button is clicked
/*app.post('/calculator', function (req, res) {
    var num1 = parseInt(req.body.firstNo)
    var num2 = parseInt(req.body.secondNo)
    var sum = (num1 + num2).toString()

    res.send('calculator',sum);
  });
  
  // when Substract button is clicked
  app.post('/sub', function (req, res) {
    console.log(req.body.todo + " is added to bottom of the list.");
    res.redirect('/');
  });

app.get('/student', function (req, res) {
    res.render('student', 
    {         
        title: 'Hello',         
        name: 'Priya'     
    }) 
});*/

app.post('/submit-student-data', function (req, res) {
    debugger;
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});
 
app.listen(3000,()=>{
    console.log('server is running on port 3000')
})