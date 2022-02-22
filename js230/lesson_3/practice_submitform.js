// https://codepen.io/launchschool/pen/ybzadx/587b47206111d4def64bb419de8c47b3?editors=0011
/*
Recall that the product edit form didn't work properly in the last assignment. Make changes to the JavaScript to submit the edit form using XMLHttpRequest. Once your code is working, you should see the message — "You must be logged in to do that." — when you try to submit the form. We'll deal with this in the next problem.
*/

document.addEventListener("DOMContentLoaded", () => {
  let store = document.getElementById("store");

  let request = new XMLHttpRequest();
  request.open("GET", "https://ls-230-web-store-demo.herokuapp.com/products");

  // listen for request response
  request.addEventListener(
    "load",
    (event) => (store.innerHTML = request.response)
  );
  request.send();

  // handle click events on anchor tags
  store.addEventListener("click", (event) => {
    let target = event.target;
    if (target.tagName !== "A") {
      return;
    }
    event.preventDefault();

    let request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://ls-230-web-store-demo.herokuapp.com" +
      target.getAttribute("href")
    );

    // update store div with new html content
    request.addEventListener("load", (event) => {
      store.innerHTML = request.response;
    });
    request.send();
  });

  // add another el for submit action on store
  store.addEventListener('submit', (e) => {
    event.preventDefault(); // prevent the form from submitting

    let form = e.target; // form is what triggered the event
    // console.log(`${e.target} is the target!`);

    let productid = form.getAttribute('action'); // get path for product resource
    let data = new FormData(form); // serialize form data

    request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://ls-230-web-store-demo.herokuapp.com" + productid
    );
    request.setRequestHeader('Authorization', 'token AUTH_TOKEN'); // add token to Authorization request header

    request.addEventListener("load", e => store.innerHTML = request.response); // update store div with response

    request.send(data);
  });
});
