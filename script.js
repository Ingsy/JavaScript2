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


  