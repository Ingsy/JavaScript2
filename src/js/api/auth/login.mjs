import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile, userName) {
    const loginURL = API_SOCIAL_URL + action;
    const body = JSON.stringify(profile, userName);

    const response = await fetch(loginURL, {
        headers: {
            "content-Type": "application/json",
        },
        method,
        body,
    });

    const result = await response.json();

    storage.saveString("token", result.accessToken);
    storage.save("profile", { name: result.name, email: result.email });
    storage.saveString("userName", result.name);


    alert("You are now logged in");
    window.location.href = "/profile.html"
}

