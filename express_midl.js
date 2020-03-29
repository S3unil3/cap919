const express =require('express');
const hbs =require('hbs');
const fs=require('fs');
var app=express();
hbs.registerPartials(__dirname+'/views/partial');
    app.set('view engine','hbs');
app.use((req,res,next) => {
    var now = new Date().toString();
    var msg = `${now}:  ${req.method} ${req.url} `;
    console.log(msg);


fs.appendFileSync('server.log',msg + '\n',(err) => {
    if(err){
        console.log("unable to access");
    }
});
next();

});
app.use((req,res,next)=>{
    res.render('maintence.hbs')
})


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

 app.listen(4000)
 {
     console.log("hey its working")
 }