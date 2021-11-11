//input: string containing nonalpha and alpha
//output: string with nonalpha chars replaced by " "
//rule: if one or more nonalpha chars occur consecutively, replace with only one space .e.g no double whitespace
//algo: regex

function cleanUp(string) {
  let regex = RegExp("[\W]+", "g");
  return string.replace(/[\W]+/gi, " ");
}

console.log(cleanUp("---what's my +*& l   ine?"));    // " what s my line "
