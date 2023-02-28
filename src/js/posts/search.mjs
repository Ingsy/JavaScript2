import { setsearchFormListener } from "../handlers/searchPost.mjs";

function searchPosts(posts){
  setsearchFormListener.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredSearch = post.filter(function (posts){
      if (posts.title.toLowerCase().includes(searchValue)){
        return true;
      }
    });
    displaySearchResult(searchPosts);
  };
}

  // can use Object.entries() here maybe? 

  //const person = {
   // firstName: 'Ola',
    //lastName: 'Nordmann',
    //module: 'JavaScript',
  //};
  
  //Object.entries(person).forEach(([key, value]) => {
  //  console.log('key:', key, 'value:', value);
  //});