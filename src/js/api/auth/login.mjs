import {API_SOCIAL_URL} from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile){
const loginURL = API_SOCIAL_URL + action;
const body = JSON.stringify(profile); 

const response = await fetch(loginURL, {
    headers:{
        "content-Type": "application/json",
        Authorization: "Bearer"
    },
    method,
    body
});
//console.log(result);
const result = await response.json()

localStorage.setItem("token", result.accessToken);
//localStorage.getItem("token");
//const { accessToken, ...user } = await response.json();

const token = localstorage.getItem("token");

storage.save("token", accessToken);

storage.save("profile", user);

//alert("You are now logged in");
}

