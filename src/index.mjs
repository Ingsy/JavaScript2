import * as listeners from "./js/handlers/index.mjs";
import { setLogOut } from "./js/api/auth/logout.mjs";
import { updatePost } from "./js/posts/update.mjs";
import { removePost } from "./js/posts/delete.mjs";

import { deletePost } from "./js/handlers/deletePost.mjs";
import * as storage from "./js/storage/index.mjs";


const path = location.pathname;

if (!storage.isLoggedIn()) {
  console.log("Not logged in");
} else {
  const profile = storage.load("profile");
  console.log(profile.name, profile.email);
}

if (path === "/login.html") {
  listeners.setLoginFormListener();
} else if (path === "/register.html") {
  listeners.setRegisterFormListener();
} else if (path === "/profile.html") {
  listeners.setCreatePostFormListener();
  setLogOut();
} else if (path === "/editPost.html") {
  listeners.setUpdatePostFormListener();
} else if (path === "/index.html") {
  listeners.PostFeed();
  listeners.AllPosts();


}


