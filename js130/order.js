function order(words) {
  let digitsArray = [];
  let result = [];
  let wordsArray = words.split(" ");

  for (let i = 1; i <= wordsArray.length; i++) {
    digitsArray.push(String(i));
  }

  digitsArray.forEach((strDigit, idx) => {
    wordsArray.forEach((word, i) => {
      if (word.includes(strDigit)) {
        result.push(word);
      }
    });
  });
  return result.join(" ");
}

order("is2 Thi1s T4est 3a");
