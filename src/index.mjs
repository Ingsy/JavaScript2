

import * as listeners from "./js/handlers/index.mjs";
import * as postMethods from "/src/js/posts/index.mjs";
import { renderPostTemplate } from "./js/templates/index.mjs";
import * as templates from "./js/templates/index.mjs";
import { getPosts } from "./js/posts/read.mjs";
import { createPost } from "./js/posts/create.mjs";
import { removePost } from "./js/posts/delete.mjs";
import { updatePost } from "./js/posts/update.mjs";



const path = location.pathname;

if (path === "/login.html"){
    listeners.setLoginFormListener()
} else if (path === "/register.html"){
    listeners.setRegisterFormListener()
} else if (path === "/profile.html"){
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
//body: "new also example",
//media: "https://pricespy-75b8.kxcdn.com/product/standard/280/6017430.jpg"
//})

//updatePost({
//id: 3689,
//title: "another post updated",
//body: "oh yes updated"
 //})


//removePost(3688)
//post.getPost()
//getPosts().then(console.log);
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



