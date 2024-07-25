const http = require('http');
const port = 3001
const url = require('url');
const address = 'https://www.darshanums.in/StudentPanel/StudentDashboard.aspx/app.js?FirstName=kunj&LastName=ramoliya';
const q = url.parse(address,true);

server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/html');
	res.end('Hello world !');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
});