function createRobot(intelLevel, modelNum) {
  return {
    intelLevel: intelLevel,
    modelNum: modelNum,
    solveProblem: function() {
      console.log("Solving!");
    },
  };
}

function createHumanoid() {
  let robotObj = createRobot(10, 'T830');
  let humanoid = {
    walk: function() {
      console.log("Walking");
    },
    talk: function() {
      console.log("Talking");
    },
  };
  let humanoidObj = Object.assign(humanoid, robotObj);
  return humanoidObj;
}

let roboAudry = createHumanoid();
console.log(roboAudry);
/*
{
  walk: [Function: walk],
  talk: [Function: talk],
  intelLevel: 10,
  modelNum: 'T830',
  solveProblem: [Function: solveProblem]
}
*/
