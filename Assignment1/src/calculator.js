/*
// Returns addition of two numbers
exports.add = function (a, b) {
    return a+b;
}; 
 
// Returns difference of two numbers
exports.subtract = function (a, b) {
    return a-b;
}; 
 
// Returns product of two numbers
exports.multiply = function (a, b) {
    return a*b;
}; */

var express = require('express');
var router = express.Router();
router.post('/', function(request, response, next) {
var a=request.body.a;
var b=request.body.b;
var c= a+b;
switch(request.params.operation) {
case 'Add':
var answer = a + b;
response.send(answer);
break;
case 'Sub':
var answer = a - b;
response.send(answer);
break;
 default:
response.send("default");
}
});

module.exports = router;
