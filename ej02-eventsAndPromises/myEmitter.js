const EventEmitter = require('events');
class MyEmitter extends EventEmitter {print(){console.log('print');}}

class test {

  someRandomFunction(emitter) {
    emitter.emit('event1',"inside")
  }
}

const myEmitter = new MyEmitter();

myEmitter.on('event1', (a, b) => {
  setImmediate(() => {
    console.log(a,b,'this happens asynchronously');
  });
  process.nextTick(()=>console.log('processed in first iteration',a,b));
});

myEmitter.on('event1', () => {
  console.log("without arguments")
})


myEmitter.on('event1', (a, b) => {
  console.log("with arguments")
  console.log(a, b, this);
});

myEmitter.once('event1',()=> console.log("just once"));

console.log('############## 1 ##############');
myEmitter.emit('event1');

console.log('############## 2 ##############');
myEmitter.emit('event1','Hola',1234);

console.log('############## 3 ##############');
new test().someRandomFunction(myEmitter);

console.log('############## 4 ##############');
