
import * as listener from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs"
import * as post from "./api/posts/index.mjs"


const path = location.pathname; 

if (path === "login/") {
    listeners.setLoginFormListener()
} else if (path === "register/") {
    listeners.setRegisterFormListener()
} else if (path === "/post/create/") {
    listeners.setCreatePostFormListeners()
} else if (path === "/post/edit/") {
    listeners.setUpdatePostListener()
}

// post.createPost()
// post.updatePost()
// post.removePost()
// post.getPost()
// post.getPosts()

// post.getPost(640).then(console.log)

//async function testTemplate(){
//    const posts = await postMethods.getPosts();
//    const container = document.querySelector("#");
//    templates.renderPostTemplates(posts, container);
//}

//testTemplate()