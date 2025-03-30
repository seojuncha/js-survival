const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", () => {
  console.log("tutorial event has occured");
});

eventEmitter.on("sum event", (num1, num2) => {
  console.log(num1 + num2);
});

console.log("Start event tutorial");
eventEmitter.emit("tutorial");
eventEmitter.emit("sum event", 1, 2);

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let seojun = new Person("seojun");
seojun.on("name", () => {
  console.log("my name is", seojun.name);
});
seojun.emit("name");
