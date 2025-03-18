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

fetch('https://jsonplaceholder.typicode.com/posts') // fetch() returns a Promise
    .then(response => response.json())  // Convert response to JSON (also returns a Promise)
    .then(data => console.log(data))     // Log the data when the promise is resolved
    .catch(error => console.log('Error:', error));  // Catch any errors

// Async awaits can handle requests more effectively

async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();  // Wait for the response to be parsed as JSON
      console.log(data);  // Log the data when the promise is resolved
    } catch (error) {
      console.log('Error:', error);  // Catch any errors that occur
    }
  }
  
  fetchData(); // Call the async function
  

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
