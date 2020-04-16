const output = document.querySelector("#output");

// On first button click, fetch the first query and output
document.querySelector("#findAllNebraska").onclick = (event) => {
  console.log("Button 1 Clicked");
  fetch("/users-nebraska")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      output.innerHTML = JSON.stringify(data);
    })
    .catch((err) => console.error(err));
};

// On second button click, fetch the second query and output
document.querySelector("#findAllSentMessages").onclick = (event) => {
  console.log("Button 2 Clicked");
  fetch("/users-sent")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      output.innerHTML = JSON.stringify(data);
    })
    .catch((err) => console.error(err));
};

// On third button click, fetch the third query and output
document.querySelector("#findAllSentMessagesNebraska").onclick = (event) => {
  console.log("Button 3 Clicked");
  fetch("/users-sent-nebraska")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      output.innerHTML = JSON.stringify(data);
    })
    .catch((err) => console.error(err));
};

// On fourth button click, fetch the fourth query and output
document.querySelector("#findMaxSentMessagesNebraska").onclick = (event) => {
  console.log("Button 4 Clicked");
  fetch("/user-max-sent-nebraska")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      output.innerHTML = JSON.stringify(data);
    })
    .catch((err) => console.error(err));
};
