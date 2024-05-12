const a="piu";
console.log(a);
const fs=require("fs");
fs.writeFileSync("read.txt","Hello node");
fs.appendFileSync("read.txt","Hii ,learning node js");
const buf_data=fs.readFileSync('read.txt');
console.log(buf_data);
console.log(buf_data.toString());
fs.renameSync('read.txt','readwrite.txt');