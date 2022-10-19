const EventEmitter = require("events");

const myEvent = new EventEmitter();

myEvent.addListener("event1", () => {
  console.log("event1");
});
