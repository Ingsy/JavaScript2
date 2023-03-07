import * as listeners from "./js/handlers/index.mjs";
import { updatePost } from "./js/posts/update.mjs";
import { removePost } from "./js/posts/delete.mjs";

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
  listeners.AllPosts();
}




removePost(4275);

