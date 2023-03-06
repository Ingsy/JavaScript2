import * as listeners from "./js/handlers/index.mjs";
import { updatePost } from "./js/posts/update.mjs";

const path = location.pathname;

if (path === "/login.html") {
  listeners.setLoginFormListener();
} else if (path === "/register.html") {
  listeners.setRegisterFormListener();
} else if (path === "/profile.html") {
  listeners.setCreatePostFormListener();
} else if (path === "/editPost.html") {
  console.log("setlistener");
  listeners.setUpdatePostFormListener();
} else if (path === "/index.html") {
  listeners.PostFeed();
  listeners.AllPosts();
}
//router();



//removePost(3739);
//post.getPost()
//getPosts().then(console.log);
//createPost().then(console.log);
//post.removePost()
//post.updatePost()
