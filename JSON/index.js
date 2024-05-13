const fs=require("fs");

const data={
    name:"Indranjana",
    hobby:"Laptop",
    passion:"coding",
    CGPA:10
}

const jsondata=JSON.stringify(data); //converting obj to json
fs.writeFile("write.json",jsondata,()=>
{
    console.log("Done");
});

fs.readFile("write.json","UTF-8",(err,data)=>
{
    const objdata=JSON.parse(data);
    console.log(objdata);
})


