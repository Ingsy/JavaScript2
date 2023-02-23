import {API_SOCIAL_URL} from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
const loginURL = API_SOCIAL_URL + action;
const body = JSON.stringify(profile); 

const response = await fetch(loginURL, {
    headers:{
        "content-Type": "application/json",
    },
    method,
    body,
});

//console.log(result);
const result = await response.json();
localStorage.setItem("token", result.accessToken);

//const token = localstorage.setItem("token");

const { accessToken, ...user } = await response.json();

//storage.save("token", result.accessToken);

//storage.save("profile", user);

alert("You are now logged in");
}

