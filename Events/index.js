const EventEmitter = require("events");
const event = new EventEmitter();

event.on("Show",(sc,msg)=>
{
    console.log(`the status code is ${sc}`);
})

event.on("Show",(sc,msg)=>
    {
        console.log(`the message is ${msg}`);
    })





event.emit("Show",200,"All Ok");