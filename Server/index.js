const http = require('http');
const server = http.createServer((req,res)=>
    {
        if(req.url== '/')
            {
                res.end("This is the response of server");

            }
        else if(req.url=='/about')
            {
                res.end("about");
            }
        else if(req.url=='/home')
            {
                res.end("Inside Home");
            }
        else
        {
            res.writeHead(200);
            res.end("<h1> 404 error page </h1>");
        }
        
    });
server.listen(8000,"127.0.0.1",()=>
{
    console.log("in port 8000");
});