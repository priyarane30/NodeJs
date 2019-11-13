console.log('this is Tanvi');

const geocode = require('./geo')
geocode('Boston', (error, data) => {
 console.log('Error', error)
 console.log('Data', data)
})