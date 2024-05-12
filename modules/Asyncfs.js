const fs=require("fs");
/* fs.writeFile("read.txt","Async operations",(e)=>
{
    console.log("Created");
}); */
fs.appendFile("read.txt","Needs Callback",(err)=>
{
    console.log("Callback");
});

fs.readFile("read.txt","UTF-8",(e,data)=>      //UTF-8 for encoding as it returns binary value
{
    console.log(data);
});