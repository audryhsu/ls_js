let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let arr = Object.values(munsters);

// option 1
// males = arr.filter(obj => obj.gender === 'male');
// console.log(males.map(obj => obj.age).reduce((accumulator, age) => accumulator + age));

// option 2

let age = 0;

arr.forEach((person, i) => {
  if (person.gender === 'male') {
    age += person.age;
  }

});
console.log(age);

//print each family members info
for (let i = 0; i < Object.keys(munsters).length; i++) {
  let name = Object.keys(munsters)[i];
  let age = munsters[name].age;
  let gender = munsters[name].gender;
  console.log(`${name} is a ${age}-year-old ${gender}`);
}
