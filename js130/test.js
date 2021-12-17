function createSKU(name, category) {
  if (!isValidName(name) || !isValidCategoryName(category)) return `Invalid input.`;
  let letterIdx = 0;
  let firstLetters = name[0];
  while (firstLetters.length < 3) {
    letterIdx += 1;
    if (!name[letterIdx] || name[letterIdx] === ' ') {
      continue;
    }
    firstLetters += name[letterIdx];
  }
  let catCode = category[0] + category[1];
  return firstLetters.toUpperCase() + catCode.toUpperCase();
}

function isValidName(name) {
  return name.split("").length >= 5;
}

function isValidCategoryName(category) {
  return category.split(" ").length < 2 && isValidName(category);
}

console.log(createSKU('basket ball', 'spo rts'));
console.log(createSKU('basket ball', 's'));
console.log(createSKU('asdf', 'sports'));
console.log(createSKU('', ''));
