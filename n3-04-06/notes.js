const fs= require('fs')

const addNotes=function(title,body){
const note= loadfs();
const duplicateNotes=note.filter(function(note){
    return note.title==title
})
if(duplicateNotes.length===0){
note.push({
    title:title,
    body:body
})
saveNotes(note);
}
else{
    console.log('duplicate title');
}
}
const saveNotes=function(note){
const JSONnote=JSON.stringify(note);
fs.writeFileSync('1.json',JSONnote)
}


const loadfs=function(){
    try{
    const readbufferfromFiles=fs.readFileSync('1.json');
    const datatstring=readbufferfromFiles.toString();
    const dataparse=JSON.parse(datatstring)
    return(dataparse);
    }
    catch(ex){
        return [];
    }
}
module.exports={
    addNotes:addNotes
}