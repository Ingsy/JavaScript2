
import { authFetch } from "../api/authFetch.mjs";
import { API_SOCIAL_URL} from "../api/constants.mjs";
import { load } from "../storage/index.mjs";

const action = "/posts";
const method = "post";


export async function createPost(postData) {
const createPostURL = API_SOCIAL_URL + action;
const token = load("token"); 
//const tagsArray = postData.tags.split(" ");

const response = await authFetch(createPostURL, {
    headers: {
        "content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
       method,
       body: JSON.stringify(postData)
    })
}



    
