
const fs=require('fs');
/*const book={
    title:'test',
    price:'20'
}

const bookjson=JSON.stringify(book);
console.log(bookjson);

const parseData=JSON.parse(bookjson);
console.log(parseData.title);
fs.writeFileSync('1.txt',bookjson)
const databuffer=fs.readFileSync("1.txt");
console.log(databuffer);*/

const databuffer=fs.readFileSync('1.json');
const stringconvert=databuffer.toString();
const bookjson=JSON.stringify(stringconvert);
bookjson.name='Priya';
bookjson.age='20';
fs.readFileSync(bookjson);