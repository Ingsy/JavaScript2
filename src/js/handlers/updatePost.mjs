import { getPost } from "../posts/read.mjs";
import { updatePost } from "../posts/index.mjs";


export function setUpdatePostFormListener() {
    const form = document.querySelector("#editPost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    if (form){
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form); 
            const post = Object.fromEntries(formData.entries())
            post.id = id;  
            post.tags = post.tags.split(",");
    
             
            updatePost(post)
            alert("The post is now updated!")
        }) 
    }
}

