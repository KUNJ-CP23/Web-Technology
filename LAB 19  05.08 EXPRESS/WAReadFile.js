const express = require('express');
const path  = require('path');

const app = express();

app.get('/',(req,res)=>{
    res.send('Home from post');
});

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'Home.html'),(err,data)=>{
        if(err){
            throw err;
        }
    });
    // res.send('Welcome home');
});

app.get('/Aboutus',(req,res)=>{
    res.sendFile(path.join(__dirname,'Aboutus.html'),(err,data)=>{
        if(err){
            throw err;
        }
    });
    // res.send('Welcome about');
});

app.get('/Contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'Contact.html'),(err,data)=>{
        if(err){
            throw err;
        }
    });
    // res.send('Welcome contact');
});

app.get('/Help',(req,res)=>{
    res.sendFile(path.join(__dirname,'Help.html'),(err,data)=>{
        if(err){
            throw err;
        }
    });
    // res.send('Welcome service');
});

app.get('/Visit',(req,res)=>{
    res.sendFile(path.join(__dirname,'Visit.html'),(err,data)=>{
        if(err){
            throw err;
        }
    });
    // res.send('Welcome help');
});

app.listen(4003,()=>{
   console.log('Server started @4003'); 
});

