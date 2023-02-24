

import * as listeners from "./js/handlers/index.mjs";
import * as postMethods from "./js/posts/index.mjs";
import { renderPostTemplate } from "./js/templates/index.mjs";
import * as templates from "./js/templates/index.mjs";
import { renderPostTemplates } from "./js/templates/postb.mjs";



const path = location.pathname;

if (path === "/login.html"){
    listeners.setLoginFormListener()
} else if (path === "/register.html"){
    listeners.setRegisterFormListener()
} else if (path === "/createPost.html"){
    listeners.setCreatePostFormListener()
} else if (path === "/editPost.html"){
    listeners.setUpdatePostFormListener()
}


//router(); 

//async function testTemplate(){
//   const posts = await postMethods.getPosts(); 
//    const post = posts[35];
//    const container = document.querySelector("#post");
//    renderPostTemplate(post, container);
//}
//testTemplate()

//async function testTemplate(){
 //   const posts = await postMethods.getPosts(); 
 //    const container = document.querySelector("#post");
  //   templates.renderPostTemplates(posts, container);
 //}
 //testTemplate()

//createPost({
//title: "new eks post",
//body: "new also example"
//})

//updatePost({
//id: 3442,
//title: "another post updated",
//body: "oh yes updated"
// })


//removePost(3443)
//post.getPost()
//post.getPosts().then(console.log);
//post.createPost()
//post.removePost()
//post.updatePost()

//createPost({
//title: "example",
//body: "example"
//})

//updatePost({
    //id: 1,
    //title: "example",
    //body: "example"
//})

// post.getPost(640).then(console.log)



