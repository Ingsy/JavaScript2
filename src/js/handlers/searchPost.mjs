import { searchPosts } from "/src/js/posts/search.mjs";
import { searchForm } from "/src/js/api/constants.mjs";


export function setSearchFormListener(){
     
    
    
   

   if (searchForm){
       form.addEventListener("submit", (event) => {
                event.preventDefault()
                const form = event.target;
                const formData = new FormData(form); 
                const post = Object.fromEntries(formData.entries());
    
            //Send it to the API 
            searchPosts(filterParam);
       }); 
    };
}