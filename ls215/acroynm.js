/*
input: string phrase
output: acronym, uppercase verison of the first letter of every word
rule: counts - as word boundary
algo:
*/
function acronym(string) {
  // ...
  let arr = string.split(/[- ]/).map(word => word[0].toUpperCase()).join("");
  console.log(arr);
}

acronym('Portable Network Graphics');                  // "PNG"
acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
acronym('Complementary metal-oxide semiconductor');    // "CMOS"
acronym('Hyper-text Markup Language');                 // "HTML"
