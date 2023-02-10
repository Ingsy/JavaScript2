console.log('This is a module');


//search functionality 

  //se posts 

  // Fetches data from the URL passed in
async function doFetch(url) {
    const data = await fetch(url);
    const json = await data.json();
    return json;
  }
  
  // Our main function that will call the data
  // using await. If we don't use await then we will
  // instead get a promise

  async function main() {
    const articles = await doFetch(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    console.log(articles);
    // Returns:
    // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
  }
  
  // Execute our code
  main();


  // example of Promise.all() - get all of a users post? 

  async function doFetch(url) {
    try {
      const data = await fetch(url);
      const json = await data.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  }
  
  async function main() {
    const data = await Promise.all([
      doFetch('https://jsonplaceholder.typicode.com/todos/1'),
      doFetch('https://jsonplaceholder.typicode.com/todos/2'),
      doFetch('https://jsonplaceholder.typicode.com/todos/3'),
    ]);
  }
  
  main();


  // Post on wall 

  const fetchOptions = {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  
  // Using the `fetchOptions` object we created aboves
  fetch('https://jsonplaceholder.typicode.com/posts', fetchOptions)
    .then((response) => response.json())
    .then((json) => console.log(json));


    // delete post

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
}).then((response) => {
  console.log(response);
});