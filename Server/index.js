const http = require('http');
const server = http.createServer((req,res)=>
    {
        res.end("This is the response of server");

    });
server.listen(8000,"127.0.0.1",()=>
{
    console.log("in port 8000");
});