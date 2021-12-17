// function startCounting() {
//   let i = 0;
//   while (i < 15) {
//     console.log(i);
//     i++
//   }
// }
//
// let id = setInterval(startCounting, 2000)

function startCounting() {
  let count = 0;
  let counterId = setInterval(function() {
    count += 1;
    console.log(count);
  }, 1000);
  return counterId;
}
let counterId = startCounting();

stopCounting(counterId);


function stopCounting(counterId) {
  clearInterval(counterId);
}
