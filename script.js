fetch('https://api.noroff.dev/api/v1/auth/login', {
  method: 'POST',
  body: JSON.stringify({
    "name": "my_username",                          // Required
    "email": "first.last@stud.noroff.no",           // Required
    "password": "UzI1NiIsInR5cCI"                 // Required              
  })
})
  .then((response) => response.json())
  .then((json) => console.log(json));


  fetch('https://api.noroff.dev/api/v1/auth/login', {
  method: 'POST',
  body: JSON.stringify({
    "name": "my_username"               
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


  //getting a post

  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

  //getting all posts

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));

  // creating a new post 

  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Ingeborg Mellingens post',
    body: 'hello world',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//updating a post 

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  //patching a post
  
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  //deleting a post

  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});

/**
 * This will greet the user using their
 * user name and id
 * @param {string} userName This is the user`s name
 * @param {number} id This is the Noroff ID from x system
 * @returns {string} The greeting message is returned
 * @example 
 * ```js
 * //Use this function to greet users when they land on 
 * //our home page
 * const result = greetUser("Ola", 10)
 * console.log(result);
 * // Returns a greeting
 * //Hello Ola, you are id 10.
 * ```
*/ 
function greetUser(userName, id){
    return "hello ${userName}, you are id ${id}.";
}

const result = greetUser("Ola", 10);
console.log(result);

greetUser



//Array Methods filter()

const friends = [
    { name: 'Monica Geller', hasPosted: true, date: 2023 },
    { name: 'Phoebe Buffet', hasPosted: true, date: 2022 },
    { name: 'Chandler Bing', hasPosted: false, date: 2023 },
    { name: 'Joey Tribbiani', hasPosted: false, date: 2022 },
    { name: 'Rachel Green', hasPosted: true, date: 2023 },
  ];
  
  const filteredFriends = friends.filter(
    (friend) => friend.hasPosted && friend.date >= 2023,
  );
  
  console.log(filteredFriends);