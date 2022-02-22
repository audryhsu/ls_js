let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

function messWithDemographics2(demoObject) {
  munsters2 = Object.values(demoObject).map(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
  return munsters2;
}

console.log(messWithDemographics2(munsters));
console.log(munsters);

console.log(messWithDemographics(munsters));
console.log(munsters);

paper, Rock

paper, rock
paper
