/*
input: two version numbers in string, v1, v2
- must start with a digit, cannot start with a .
- . denotes a subversion
output: 1 if version 1> v2, -1 if v1 < v2, and 0 if v1=== v2

rule: only consider strings containing numbers as .
- 1 ===1.0
- 1.0 < 1.1.3 --> compared the place after the first .
- 1.1.4 < 1.2 --> versions can be of different lengths. As soon as there is a non-equivalent sub-version, immediately return
- 1.2 === 1.2.0.0 --> '.0' subversion is equivalent to ' ' for comparison purposes
- 1.2 < 1.2.1 --> '.0' subversion is equivalent to ' ' for comparison purposes
- 1.2.0.0 < 1.18.2 --> compare 2 < 18 ...num of digits between . can be different.
- 1.18.2 < 13.37 -->

algo:
- split each version string on .
- iterate and compare each digit.
  - if digit values are equivalent, continue to next digit
    - if vx has more digits than vy,
      - check if vx + 1 === 0, then they are equivalent
      - else, vx > vy
  - else, break out of loop and output result
*/
function compareVersions(version1, version2) {
  let re = /[^0-9.]/;
  if (re.test(version1) || re.test(version2)) return null;
  if (version1[0] === '.' || version2[0] === '.') return "Invalid input";

  let v1 = version1.split('.').map((digit) => Number(digit));
  let v2 = version2.split('.').map((digit) => Number(digit));

  // if (v1.includes(NaN) || v2.includes(NaN)) {
  //   return "Invalid input"
  // }

  let stopLength = v1.length > v2.length ? v1.length : v2.length;

  for (let i = 0; i < stopLength; i++) {
    if (!v2[i]) v2[i] = 0;
    if (!v1[i]) v1[i] = 0;

    if (v1[i] > v2[i]) {
      console.log("v1 is bigger");
      return 1;
    } else if (v2[i] > v1[i]) {
      console.log("v2 is bigger");
      return -1;
    } else if (v1[i] === v2[i]) {
      continue;
    }
  }
  console.log("they are equivalent");
  return 0;
}

console.log(compareVersions('0.1', '1') === -1);
console.log(compareVersions('1', '1.0') === 0);
console.log(compareVersions('1.1.3', '1.1.4') === -1);
console.log(compareVersions('1.2.0.0', '1.18.2') === -1);
console.log(compareVersions('13.37', '1.18.2') === 1);
console.log(compareVersions('1.2', '1.2.0.0') === 0);
//invalid input test cases
console.log(compareVersions('1.a', '1.2.0.0') === null);
console.log(compareVersions('1.*', '1.2.0.0') === null);
console.log(compareVersions('.1', '1.2.0.0') === "Invalid input");


// 0.1 < 1 = 1.0 < 1.1.3 < 1.1.4 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

/*
problem:
input:
output:
rule:
ds:
algo:
*/
