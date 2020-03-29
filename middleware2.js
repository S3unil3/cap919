const express =require('express');
const hbs =require('hbs');
var app=express();
    app.set('view engine','hbs');
 app.use(express.static(__dirname+'/public'));
 app.get('/',(req,res)=>{
     res.send({
        name:'Sunil',
        courses:['Cap212','Cap200']
 });

});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        PageTitle:'About',
        Yr: new Date().getFullYear()
    });

});
 app.listen(4000)
 {
     console.log("hey its working")
 }