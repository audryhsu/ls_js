/*
You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

problem: light switches numbered from 1 to n...
- lights start out off.
-
input: integer - number of switches and number of loops
output: array of numbers that correlate to light positions that are on are going through n loops
ex:
- n = 5
1, 2, 3, 4, 5
Array(5)
- round 1: toggle every 1 light on
- round 2: toggle every 2 lights (even numbered lights, or odd num indexes)
  - 2, 4
- round 3: toggle every 3 lights
  - 3, 6, 9 ...
- round 4 :toggle every 4 lights
  - 4, 8, 12...
...
rule:
- round number correlates to every r lights to toggle
- initialze the lights array to n
- light number == index + 1
- looping through n times
algo:
- validate inputs
  - n > 0
  - n must be a number, non NaN or else return null;
  light on = true
  light off = false;
- initialize lights array
- loop through lights array n times
- set up a round counter
  - for each iteration, toggle the light at: where light number % r === 0; (a multiple of r)
  - else, move to the next;
- Get light switch numbers thaat are on, or true
- loop through lights array
  - if true, append indexOf(light) + 1 to the result array
ds:
*/


function lightsOn(switches) {
  if (switches < 0 || Number.isNaN(switches)) return null;
  let lights = Array(switches).fill(false);

  let round = 1;

  while (round <= switches) {
    let lightNum;

    lights = lights.map((light, i) => ((i + 1) % round === 0 ? !light : light));
    // for (let i = 0; i < lights.length; i++) {
    //   lightNum = i + 1;
    //   if (lightNum % round === 0) {
    //     lights[i] = !lights[i]
    //   }
    // }
    round += 1;
  }
  let on = getOnLights(lights);
  console.log(on);

}

function getOnLights(lights) {
  let on = [];
  for (let i = 0; i < lights.length; i++) {
    if (lights[i]) on.push(i + 1);
  }

  return on;
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on


lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
