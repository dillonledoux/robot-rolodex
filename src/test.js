const fetch = require("node-fetch");

fetch('http://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    myJson.forEach(element => console.log(element.id));
  });