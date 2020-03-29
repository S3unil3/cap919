const express = require('express');
var app = express();

app.use(express.static(__dirname+'/public')); //midleware function -use

app.get('/',(req,res)=>{
    res.send({
        name:'sunil',
        courses:['cap917','cap918']
        

        
    });
});

app.get('/about',(req,res)=>{
    res.send("<b>About page</b>");
})


app.listen(4000,() =>{

    console.log("server running")
});