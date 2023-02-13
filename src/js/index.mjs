import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as post from "./api/posts/index.mjs";

const path = location.pathname; 

if (path === "login/"){
    setLoginFormListener()
} else if (path === "register/"){
    setRegisterFormListener()
}

// post.createPost()
// post.updatePost()
// post.removePost()
// post.getPost()
// post.getPosts()

post.getPost(640).then(console.log)