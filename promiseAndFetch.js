const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Success!"); // The promise is fulfilled
  } else {
    reject("Error occurred!"); // The promise is rejected
  }
});

myPromise
  .then(result => console.log(result))  // Will log "Success!" if resolved
  .catch(error => console.log(error));  // Will log "Error occurred!" if rejected

// Fetch request

fetch('https://jsonplaceholder.typicode.com/todos/1') // fetch() returns a Promise
  .then(response => response.json())  // Convert response to JSON (also returns a Promise)
  .then(data => console.log(data))     // Log the data when the promise is resolved
  .catch(error => console.log('Error:', error));  // Catch any errors

// Async awaits can handle requests more effectively

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();  // Wait for the response to be parsed as JSON
    console.log(data);  // Log the data when the promise is resolved
  } catch (error) {
    console.log('Error:', error);  // Catch any errors that occur
  }
}

fetchData(); // Call the async function

// Axios streamlines the process 
// npm i axios is required 
const axios = require("axios");

axios.get("https://pokeapi.co/api/v2/pokemon")
  .then(response => {
    console.log("Data received:");

    // Extracting the results array from the response
    const data = response.data.results; 

    // Iterating over each Pokemon and logging its name
    data.forEach(pokemon => {
      console.log(pokemon.name);
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);  // Handles any errors
  });


// Interesting addition -> Promise all:

const fetchPost = fetch('https://jsonplaceholder.typicode.com/posts/1');
const fetchUser = fetch('https://jsonplaceholder.typicode.com/users/1');

Promise.all([fetchPost, fetchUser])
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then(data => {
    const [post, user] = data;
    console.log('Post:', post);
    console.log('User:', user);
  })
  .catch(error => console.log('Error:', error));


