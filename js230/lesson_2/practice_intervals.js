function startcounting() {
  let i = 1;
  id = setInterval(() => {
    console.log(i);
    i++;
  }, 1000);
}

let id;
startcounting();
clearInterval(id);
