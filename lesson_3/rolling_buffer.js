function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

let buffer = [0,1,2];
let buffer2 = [0,1,2]

console.log('buffer 1:');
console.log(
addToRollingBuffer1(buffer, 1, 'aa')
);
console.log(buffer);
console.log('buffer 2:');
console.log(addToRollingBuffer2(buffer2, 1, 'aa')
);
console.log(buffer2);
