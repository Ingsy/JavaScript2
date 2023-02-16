export async function getPosts() {}

export async function getPost(id) {}



import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL} from "../constants.mjs";

const action = "/posts";
const method = "get";

export async function getPosts() {
    
const updatePostURL = `${API_SOCIAL_URL}${action}`;
    const response = await authFetch(createPostURL) 
    return await response.json();
}

export async function getPost(id) {
    if (!postData.id) {
        throw new Error("Get requires a postID");
    }
const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;
    const response = await authFetch(createPostURL) 
    return await response.json();
}