
/*
Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.
All page numbers in the dictionary will be valid integers.
Return the higher page number if ever two pages are equidistant (see last test case).

problem: find nearest chapter given a page number
input: page number as an integer (number, integer)
- book an object, keys: chapters, values: page start numbers
- chgapter 1 -14
- chapter 2, 15 - 36...
- chapter 3, 37...end?
output: chapter name (string)
rule:
- if input book is empty, return ''
- if only one chatper, return chapter
- chapters may not be in ascending page order
- if page is equidistant between chapter, return higher chapter
algo:
- sort chapter page numbers in an array
- return closest chapter page closest to n
  - 200 - 1= 199
  - 200 - 62...
  find the Abvsolute value Min of all the differences
    - findClosestInteger subfunction --> ARRAY of closest pages
    - will return array of 2 elements if two pages are equidistant
    - if more than one occurence of the min, then pick the larger page number
  - look up chapter name (keys) based on page number
    - loop through book keys, return key where key[value] === page number
[1, 62, 194, 460], 200

ds:
- arrays page numbers Object.keys
*/

function nearestChapter(bookObj, targetPage) {
  if (Object.keys(bookObj).length < 1) return "";
  if (Object.keys(bookObj).length === 1) {
    let key = Object.keys(bookObj)[0];
    return key;
  }
  let pages = Object.values(bookObj).sort((a,b) => a - b);
  let closestPage = findClosestInteger(pages, targetPage);

  for (let chapter in bookObj) {
    if (bookObj[chapter] === closestPage) return chapter;
  }


}
function findClosestInteger(array, number) {

  let closest = [];

  for (let i = 0; i < array.length; i++) {
    let delta = Math.abs(array[i] - number);

    if (closest.length < 1) {
      closest.push(array[i]);
    } else if (delta < Math.abs(closest[0] - number)) {
      closest.pop();
      closest.push(array[i]);
    } else if (delta === Math.abs(closest[0] - number)) {
      closest.push(array[i]);
    }
  }
  if (closest.length > 1) return Math.max(closest[0], closest[1]);
  return closest[0];
}


console.log(nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10) === "Chapter 2");


console.log(nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200) === "The End?");

console.log(nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 50,
  "The End?" : 13,
  "The True Ending" : 40
}, 200) === "Strange Developments");

console.log(nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3) === "Chapter 1b");
console.log(nearestChapter({}, 3) === "");

console.log(nearestChapter({
  "One chapter": 1}, 10000) === "One chapter");
