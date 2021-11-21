let book = {
  title: "Snow Crash",
  author: "Neal Stephenson",
  getDescription() {
    return title + "by" + author;
  },
};

// desired return value: 'Snow Crash by Neal Stephenson'
console.log(book.getDescription()); // => ReferenceError: title is not defined
