const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.send('Hello WORLD from get');
});

app.post('/',(req,res)=>{
    res.send('Hello WORLD from post');
});

app.listen((3003),()=>{
   console.log('Server started @3003'); 
});

console.log('Current Directory = ',__dirname);
console.log('Current filename = ',__filename);