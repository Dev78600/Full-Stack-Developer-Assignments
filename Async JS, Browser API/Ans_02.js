// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL /article/.../load
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

// Send the request over the network
xhr.send();

// This function will be called when the request is done
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP response status
    console.error(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    // response is the server response
    var users = JSON.parse(xhr.responseText);
    var userNames = users.map(function(user) {
      return user.name; // get the name of each user
    });
    console.log(userNames); // log the array of names to the console
  }
};

// This function will run if the request had an error
xhr.onerror = function() {
  console.error('Request failed');
};
