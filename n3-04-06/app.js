const notes=require('./notes')

const yargs=require('yargs')
yargs.version('1.1.0')
yargs.command({

  command:'add',
  describe:'this is add',
  builder :{
    title:{
        describe:'this is yargs add test',
        demandOption:true
    },
    body:{
        describe:'this is body',
        demandOption:true
    }
},
handler:function(argv){
    notes.addNotes(argv.title,argv.body)
}
}



)
console.log(yargs.argv)