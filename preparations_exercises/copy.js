// function copyObj(objToCopy) {
//   let newObj = {};
//   Object.assign(newObj, objToCopy);
//   console.log(newObj);
//   return newObj
// }

function copyObj(objToCopy, keys_to_copy) {
  let newObj = {};
  if (keys_to_copy) {
    keys_to_copy.forEach((key) => {
      newObj[key]= objToCopy[key]
    });
  }
  else {
    Object.assign(newObj, objToCopy);
  }
  console.log(newObj);
  return newObj
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};
copyObj(objToCopy, ['foo', 'qux']);
copyObj(objToCopy);
