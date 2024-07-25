const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {

    if(req.url == '/Home'){
        fs.readFile("Home.html", (err,data) => {
            if(err){
                res.end(err);
            }
            else{
                res.writeHead(200,'Content-Type','text/html');
                res.end(data);
            }
        }); 
    }

    else if(req.url == '/Aboutus'){
        fs.readFile("Aboutus", (err,data) => {
            if(err){
                res.end(err);
            }
            else{
                res.writeHead(200,'Content-Type','text/html');
                res.end(data);
            }
        }); 
    }

    else if(req.url == '/Contact'){
        fs.readFile("Contact.html", (err,data) => {
            if(err){
                res.end(err);
            }
            else{
                res.writeHead(200,'Content-Type','text/html');
                res.end(data);
            }
        }); 
    }

    else if(req.url == '/Help'){
        fs.readFile("Help.html", (err,data) => {
            if(err){
                res.end(err);
            }
            else{
                res.writeHead(200,'Content-Type','text/html');
                res.end(data);
            }
        }); 
    }

    else if(req.url == '/Visit'){
        fs.readFile("Visit.html", (err,data) => {
            if(err){
                res.end(err);
            }
            else{
                res.writeHead(200,'Content-Type','text/html');
                res.end(data);
            }
        }); 
    }

    else{
        const data = fs.readFileSync("MainPage.html","utf-8");
        res.end(data);
    }

    });
    

server.listen(3033,() => {
    console.log(`hello`)
});