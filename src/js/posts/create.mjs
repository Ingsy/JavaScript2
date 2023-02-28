
import { authFetch } from "../api/authFetch.mjs";
import { API_SOCIAL_URL} from "../api/constants.mjs";
import { load } from "../storage/index.mjs";

const action = "/posts";
const method = "post";


export async function createPost(postData) {
const createPostURL = API_SOCIAL_URL + action;
const token = load("token"); 
//const tagsArray = postData.tags(" ");

const response = await authFetch(createPostURL, {
       method,
       body: JSON.stringify({
        title: postData.title,
        media: postData.media,
        //tags: tagsArray,
    })
});

    const post = await response.json();

    console.log(post);
}



    
