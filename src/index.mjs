import * as listeners from "./js/handlers/index.mjs";
import { setLogOut } from "./js/api/auth/logout.mjs";
import * as storage from "./js/storage/index.mjs";


const path = location.pathname;

function checkRouting() {
  if (path === "/login.html") {
    listeners.setLoginFormListener();
    return;
  } else if (path === "/register.html") {
    listeners.setRegisterFormListener();
    return;
  }

  if (!storage.isLoggedIn()) {
    window.location.href = "/login.html"

  }

  if (path === "/profile.html") {
    listeners.setCreatePostFormListener();
    setLogOut();
    listeners.addProfileName();
  } else if (path === "/editPost.html") {
    listeners.setUpdatePostFormListener();
  } else if (path === "/index.html") {
    listeners.PostFeed();
    listeners.AllPosts();
    listeners.deletePost();
  } else if (path === "/single-post.html") {
    listeners.singlePost();
  }
}

window.onpaint = checkRouting();




