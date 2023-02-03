fetch('https://api.noroff.dev/api/v1/auth/login', {
  method: 'POST',
  body: JSON.stringify({
        "username": "my_username"
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));