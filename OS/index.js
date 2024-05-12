const os = require("os");
console.log(os.arch()); // architecture
const freeMemory = os.freemem();
console.log(`${freeMemory/1024/1024}`); //gb
console.log(`${os.totalmem()/1024/1024}`);
console.log(os.platform());
console.log(os.hostname());
