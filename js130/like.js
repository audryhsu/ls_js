/*
input: array of names
output: string representing who liked the post
rule:
- empty array = "no one likes this"
- two people, use "and" as separator
- if three- comma and
if four or more - list first two names only
algo:
- determine how manyh people liked a post
*/

function likes(names) {
  likers = names.length;

  switch (likers) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names.join(' and ')} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]}, and ${likers - 2} others like this`;
  }
}

let names = ['peter', 'jay', 'tomo', 'audry', 'bob'];

console.log(likes(names));
