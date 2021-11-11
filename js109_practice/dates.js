function toDate(string) {
  return new Date(string + "T00:00:00");
}

const TODAY = toDate("2018-08-05");

console.log(
  TODAY.getFullYear()
);
