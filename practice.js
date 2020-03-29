const express =require('express');
const hbs =require('hbs');
var app=express();
    app.set('view engine','hbs');
 app.use(express.static(__dirname+'/public'));
 app.get('/',(req,res)=>{
    res.render('home.hbs',{
        name:'LPU',
        pic:'https://images.static-collegedunia.com/public/college_data/images/campusimage/149543439828.jpg',
        info:'Get all university information is here'
        
    });
 });



app.get('/bca',(req,res)=>{
    res.render('bca.hbs',{
       title:"BCA COURSE",
       Time: "3 years"
    });

 


});
app.get('/mca',(req,res)=>{
    res.render('mca.hbs',{
        head:'MCA',
        courses:'PHP'
    })
})

 app.listen(4000)
 {
     console.log("hey its working")
 }