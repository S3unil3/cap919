const express =require('express');

const hbs =require('hbs');
var app=express();
const port=process.env.PORT || 3000
hbs.registerPartials(__dirname+'/views/partial');
    app.set('view engine','hbs');
 app.use(express.static(__dirname+'/public'));

 hbs.registerHelper('getcurrentyear',()=>{
     return new Date().getFullYear();
 })

 app.get('/',(req,res)=>{
     res.render('home1.hbs',{
         PageTitle:'Home',
     })
 });



app.get('/about',(req,res)=>{
    res.render('about1.hbs',{
        PageTitle:'About',
        
    });

});

app.get('/contactus',(req,res)=>{
    res.render('Contactus1.hbs',{
        PageTitle:'Contact',
        
    });

});

 app.listen(port,()=>
 {
     console.log(`Server is up on port ${port}`);
 });