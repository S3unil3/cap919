const express = require('express');
var app = express();

app.get('/',(req,res)=>{
    // res.send("Hello Express");
    
    res.send("<h2 style='color:red;'>Hello Express<h2>");
});
app.listen(4000);