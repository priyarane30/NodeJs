/*normal function*/

/*const event={
name:'this is test for arrow',

publishfunction:function(){
    console.log('this is fuction object property:  '+this.name)
}

}*/

/*const event={
    name:'this is test for arrow',
    
    publishfunction:()=>{
        console.log('this is fuction object property:  '+this.name)
    }
    
    }*/

  /*  const event={
        name:'this is test for arrow',
        arrayList:["a","b","c"],
        publishfunction(){
            console.log('this is fuction object property:  '+this.name)
            this.arrayList.forEach(function(element){
                console.log(element +'hello '+ this.name); 
            })

        }
        
        }*/

        const event={
            name:'this is test for arrow',
            arrayList:["a","b","c"],
            publishfunction(){
                console.log('this is fuction object property:  '+this.name)
                this.arrayList.forEach((element)=>{
                    console.log(element +'hello '+ this.name); 
                })
    
            }
            
            }

event.publishfunction()