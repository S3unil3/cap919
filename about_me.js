const express=require('express');
const hbs=require('hbs');
var app=express();
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));   
app.get('/',(req,res)=>{
    res.render('intro.hbs',{
        img:'https://i.ytimg.com/vi/wVLSUp-no50/maxresdefault.jpg',
        Name:'Sunl Kumar',
        adr:'Jalandhar,Punjab'
    });
});
app.get('/academic',(req,res)=>{
    res.render('acadmic.hbs',{
        Course:'BCA',
        cgpa:'7.75',
        repiar:'No repair',
        subject:[{"Name":"PHP"},
        {"Name":"DBMS"},
    {"Name":"C++"}],
    });

});

app.get('/hobbies',(req,res)=>{
    res.render('hobbies.hbs',{
        img:'https://www.checkfit.co.uk//files-client/blog_images/800-600/Cricket.jpg',
       hobi:'Playing Cricket',
       hobi2:'Listening Music',
       img2:'https://images.macrumors.com/t/8k-7BpnxpJjF0uXF-JQmDnaejPY=/800x0/article-new/2018/05/apple-music-note-800x420.jpg',
    });

});
app.get('/personal',(req,res)=>{
    res.render('personal.hbs',{
      Name:'Sunil',
      regi:'11700507',
      mb:'65151654564',
      ml:'hnjihnji@gmail.com',

     
      
       
    });

 


});

app.listen(4000)
{
    console.log("hey its working")
}