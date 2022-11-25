// We can create, fire and listen for our own events.

const EventEmitter = require("events");
const event = new EventEmitter();

/*

event.on('sayMyName', () => {
    console.log("Shrey");
})

event.on('sayMyName', () => {
    console.log("Shambhu");
})
 
event.on('sayMyName', () => {
    console.log("Patel");
})
 

event.emit("sayMyName");
*/

event.on('checkPage',(sc,msg)=>{
console.log(`status code is ${sc} and the page is ${msg}`);
})

event.emit("checkPage",200 ,"ok")