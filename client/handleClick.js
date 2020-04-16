const output = document.querySelector("#output");

document.querySelector("#findAllNebraska").onclick = (event) => {
  console.log("Button 1 Clicked");
  // An example of a query using the fetch API
  fetch("/users-nebraska")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      output.innerHTML = JSON.stringify(data);
    })
    .catch((err) => console.error(err));
};

document.querySelector("#findAllSentMessages").onclick = (event) => {
  console.log("Button 2 Clicked");
  // An example of a query using the fetch API
  fetch("/users-sent")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      output.innerHTML = JSON.stringify(data);
    })
    .catch((err) => console.error(err));
};

document.querySelector("#findAllSentMessagesNebraska").onclick = (event) => {
  console.log("Button 3 Clicked");
  // An example of a query using the fetch API
  fetch("/users-sent-nebraska")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      output.innerHTML = JSON.stringify(data);
    })
    .catch((err) => console.error(err));
};

document.querySelector("#findMaxSentMessagesNebraska").onclick = (event) => {
  console.log("Button 4 Clicked");
  // An example of a query using the fetch API
  fetch("/user-max-sent-nebraska")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      output.innerHTML = JSON.stringify(data);
    })
    .catch((err) => console.error(err));
};
