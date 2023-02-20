
import { setLoginFormListener } from "./js/handlers/login.mjs";
import { setRegisterFormListener } from "./js/handlers/register.mjs";

import { createPost } from "./js/posts/create.mjs";


const path = location.pathname;

if (path === "/login.html"){
    setLoginFormListener()
} else if (path === "/register.html"){
    setRegisterFormListener()
}
// import * as constants from "./api/constants.mjs";

//router(); 

//post.createPost();
// post.updatePost()
// post.removePost()
// post.getPost()
//post.getPosts().then(console.log);

createPost({
title: "example",
body: "example"
})

//updatePost({
    //id: 1,
    //title: "example",
    //body: "example"
//})

// post.getPost(640).then(console.log)

//async function testTemplate(){
//    const posts = await postMethods.getPosts();
//    const container = document.querySelector("#posts");
//    templates.renderPostTemplates(posts, container);
//}

//testTemplate()

//token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im15X3VzZXJuYW1lIiwiaWF0IjoxNjc1NDI5NTc5fQ.03nQlbKTbP5LixQdaiybBIAfjZHM9KaHPVXy_H4vE08";

//localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im15X3VzZXJuYW1lIiwiaWF0IjoxNjc1NDI5NTc5fQ.03nQlbKTbP5LixQdaiybBIAfjZHM9KaHPVXy_H4vE08");
//localStorage.removeItem("firstName");