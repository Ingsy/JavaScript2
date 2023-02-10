import {API_SOCIAL_URL} from "../constants";

const action = "/auth/register";
const method = "post";

export async function register(profile){
const registerURL = API_SOCIAL_URL + action;
const body = JSON.stringify(profile); 

const respons = await fetch(registerURL, {
    headers:{
        "content-Type": "application/json"
    },
    method,
    body
})

const result = await Response.json()
return result
}