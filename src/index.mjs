import * as listeners from "./js/handlers/index.mjs";
import * as postMethods from "/src/js/posts/index.mjs";
import { renderPostTemplate } from "./js/templates/index.mjs";
import * as templates from "./js/templates/index.mjs";
import { getPosts } from "./js/posts/read.mjs";
import { createPost } from "./js/posts/create.mjs";
import { removePost } from "./js/posts/delete.mjs";
import { updatePost } from "./js/posts/update.mjs";
import { displaysearchPosts } from "./js/posts/search.mjs";
import { filteredPosts } from "./js/posts/filter.mjs";

const path = location.pathname;

if (path === "/login.html") {
  listeners.setLoginFormListener();
} else if (path === "/register.html") {
  listeners.setRegisterFormListener();
} else if (path === "/profile.html") {
  listeners.setCreatePostFormListener();
} else if (path === "/editPost.html") {
  listeners.setUpdatePostFormListener();
} else if (path === "/index.html") {
  listeners.PostFeed();
} else if (path === "/index.html") {
  listeners.displaysearchPosts();
} else if (path === "/index.html") {
  listeners.filteredPosts();
}
//router();

//createPost({
//title: "new eks post",
//body: "new also example",
//media: "https://pricespy-75b8.kxcdn.com/product/standard/280/6017430.jpg"
//})

//updatePost({
//id: 3727,
//title: "post updated",
//body: " yes updated"
//})

//removePost(3739);
//post.getPost()
//getPosts().then(console.log);
//createPost().then(console.log);
//post.removePost()
//post.updatePost()
