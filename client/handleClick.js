const output = document.querySelector("#output");

// On first button click, fetch the first query and output
document.querySelector("#findAllNebraska").onclick = (event) => {
  console.time("Time to query for all users from Nebraska");
  fetch("/users-nebraska")
    .then((response) => {
      console.timeEnd("Time to query for all users from Nebraska");
      return response.json();
    })
    .then((data) => {
      output.innerHTML = `Total Number of User Records: ${
        data.length
      }<br/><br/>Query Results: <pre>${JSON.stringify(
        data,
        undefined,
        2
      )}</pre>`;
    })
    .catch((err) => console.error(err));
};

// On second button click, fetch the second query and output
document.querySelector("#findAllSentMessages").onclick = (event) => {
  console.time("Time to query for all users who sent messages between 8am-9am");
  fetch("/users-sent")
    .then((response) => {
      console.timeEnd(
        "Time to query for all users who sent messages between 8am-9am"
      );
      return response.json();
    })
    .then((data) => {
      output.innerHTML = `Total Number of User Records: ${
        data.length
      }<br/><br/>Query Results: <pre>${JSON.stringify(
        data,
        undefined,
        2
      )}</pre>`;
    })
    .catch((err) => console.error(err));
};

// On third button click, fetch the third query and output
document.querySelector("#findAllSentMessagesNebraska").onclick = (event) => {
  console.time(
    "Time to query for all users who sent messages between 8am-9am from Nebraska"
  );
  fetch("/users-sent-nebraska")
    .then((response) => {
      console.timeEnd(
        "Time to query for all users who sent messages between 8am-9am from Nebraska"
      );
      return response.json();
    })
    .then((data) => {
      output.innerHTML = `Total Number of User Records: ${
        data.length
      }<br/><br/>Query Results: <pre>${JSON.stringify(
        data,
        undefined,
        2
      )}</pre>`;
    })
    .catch((err) => console.error(err));
};

// On fourth button click, fetch the fourth query and output
document.querySelector("#findMaxSentMessagesNebraska").onclick = (event) => {
  console.time(
    "Time to query for the user who sent the maximum number of messages between 8am-9am from Nebraska"
  );
  fetch("/user-max-sent-nebraska")
    .then((response) => {
      console.timeEnd(
        "Time to query for the user who sent the maximum number of messages between 8am-9am from Nebraska"
      );
      return response.json();
    })
    .then((data) => {
      output.innerHTML = `User ID: ${
        data[0]["User ID"]
      }<br/><br/>Maximum Number of Messages: ${
        data[0]["Message Count"]
      }<br/><br/>Query Results: <pre>${JSON.stringify(
        data,
        undefined,
        2
      )}</pre>`;
    })
    .catch((err) => console.error(err));
};
