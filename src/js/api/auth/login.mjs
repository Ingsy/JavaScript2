import {API_SOCIAL_URL} from "../constants";
import * as storage from "../../storage/index.mjs"

const action = "/auth/login";
const method = "post";

export async function login(profile){
const loginURL = API_SOCIAL_URL + action;
const body = JSON.stringify(profile); 

const respons = await fetch(loginURL, {
    headers:{
        "content-Type": "application/json"
    },
    method,
    body
})

const { accessToken, ...profile } = await response.json()


storage.save("token", accessToken)

storage.save("profile", result)
}

