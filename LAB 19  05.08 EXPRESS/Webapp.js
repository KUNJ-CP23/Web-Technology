const express = require('express');

const app = express();

//route
//app.method(path,handler)  handler is function

app.get('/',(req,res)=>{
    res.send('Home from get');
});

app.get('/home',(req,res)=>{
    res.send('Welcome home');
});

app.get('/about',(req,res)=>{
    res.send('Welcome about');
});

app.get('/contact',(req,res)=>{
    res.send('Welcome contact');
});

app.get('/service',(req,res)=>{
    res.send('Welcome service');
});

app.get('/help',(req,res)=>{
    res.send('Welcome help');
});

app.listen(3004,()=>{
   console.log('Server started @3004'); 
});

