import * as listeners from "./js/handlers/index.mjs";
import { setLogOut } from "./js/api/auth/logout.mjs";
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
  listeners.deletePost();
  listeners.singlePost();


}


