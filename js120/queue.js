/*
define a circular queue object
- enqueue : add obj to position immediately following the most recently added objects
  - if lastPositionFilled is null, place object in front of queue
  - otherwise, place object in lastPositionFilled + 1
  - if buffer is full, first dequeue oldest object then enqueue in that position.

- dequeue: removes "oldest" object from queue
  - find oldest position and remove object

props:
- buffer size x
- count n - tracks the object precedence?
- buffer: {1: obj,
          2: null,
          3: null..}

*/

class CircularQueue {
  static STARTING_KEY = 0;
  constructor(bufferSize) {
    this.bufferSize = bufferSize;
    this.count = 1;
    this.buffer = this.createBuffer(bufferSize);
    // this.buffer = {0: 1, 1: 2, 2: 3}
  }
  dequeue() {
    let dequeuedObj;
    if (this.empty()) return null;
    dequeuedObj = this.buffer[this.oldestObjKey()];
    this.buffer[this.oldestObjKey()] = null;
    return dequeuedObj;
  }
  enqueue() {
    if (this.full()) {
      this.dequeue();
    }
    this.buffer[this.nextKey()] = this.count;
    this.count += 1;
  }
  createBuffer(bufferSize) {
    let entries = [];
    for (let i = CircularQueue.STARTING_KEY; i < bufferSize; i++) {
      entries.push([i, null])
    }
    return Object.fromEntries(entries);
  }
  getBuffer() {
    console.log(this.buffer);
  }
  full() {
    return !Object.values(this.buffer).some(value => value === null);
  }
  empty() {
    return Object.values(this.buffer).every(value => value === null);
  }
  oldestObjKey() {
    let oldestValue = Math.min(...Object.values(this.buffer).filter(value => value));
    for (let key in this.buffer) {
      if (this.buffer[key] === oldestValue) return key;
    }
  }
  newestObjKey() {
    let newestValue = Math.max(...Object.values(this.buffer).filter(value => value));
    for (let key in this.buffer) {
      if (this.buffer[key] === newestValue) return key;
    }
  }
  nextKey() {
    let key = Number(this.newestObjKey()) + 1;
    if (key < this.bufferSize) return key;
    else {
      return CircularQueue.STARTING_KEY;
    }
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);
//
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);
//
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);
//
let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);
