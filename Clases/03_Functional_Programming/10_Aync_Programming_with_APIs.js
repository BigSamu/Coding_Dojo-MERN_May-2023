//------------------------------------------------------------------------------
// ASYNC PROGRAMMING WITH APIs
//------------------------------------------------------------------------------

// fetch is a built-in JavaScript function used for making HTTP requests to retrieve
// resources from a network. It returns a Promise that resolves to a Response object
// representing the response to the request.

// Basic synatx when receiving JSON data from API
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // Handle the JSON data
//   })
//   .catch(error => {
//     // Handle any errors
//   });

// NOTE: .json() is a method of the Response object from the API that takes a
// Response stream and reads it to completion. It returns a promise that resolves
// with the result of parsing the 'data' fetched from text to JSON format.

// -----------------------------------------------------------------------------
// Example 1 - with then and catch
// -----------------------------------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log("----------------------");
    console.log("first .then");
    console.log("----------------------");
    return response.json();
  })
  .then((data) => {
    console.log("second .then");
    console.log("----------------------");
    console.log(data);
    console.log("----------------------");
  })
  .catch((error) => {
    console.log("----------------------");
    console.log("inside .catch", error);
    console.log("----------------------");
  })
  .finally(() => {
    console.log("----------------------");
    console.log(".finally", "This happens whether the .catch happens or not.");
    console.log("----------------------");
  });

console.log("----------------------");
console.log("I may print before!");
console.log("----------------------");

// -----------------------------------------------------------------------------
// Example 1 - Simplified syntax
// -----------------------------------------------------------------------------

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("inside .catch", error))
//   .finally(() => console.log(".finally", "This happens whether the .catch happens or not."));

// console.log("----------------------");
// console.log("I may print before!");
// console.log("----------------------");

// -----------------------------------------------------------------------------
// OPTIONAL BELOW -> WILL BE SEE IN REACT CHAPTER
// -----------------------------------------------------------------------------

// The typical verbs for HTTP requests are GET, POST, PUT, PATCH, and DELETE.

// fetch accept the following parameters:
// a) url: The URL of the resource you want to fetch.
// b) options: An object containing any custom settings that you want to apply to
// the request. The most common options are method, headers, and body.
// c) method: The HTTP method to use for the request. The default is GET.
// d) headers: An object containing any custom headers that you want to include in
// the request. The most common header is Content-Type.
// e) body: The data to send with the request, usually used with POST, PUT, or PATCH

// An example below with a post request

// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     // Handle the JSON data
//   })
