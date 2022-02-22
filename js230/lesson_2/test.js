function higherOrder(callback) {
  let func = callback;
  callback = () => {
    console.log(arguments);

  };
}

function mycallback(param, param2, param3) {
  // console.log('callback param: ', param);
  // console.log('callback param2: ', param2);
  // console.log('callback param3: ', param3);
  return 'callback return value';
}

higherOrder(mycallback('audry', 'and', 'another one'));
