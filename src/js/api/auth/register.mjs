import { API_SOCIAL_URL } from "../constants.mjs";



const action = "/auth/register";
const method = "post";

export async function register(profile) {
    try {
        const registerURL = API_SOCIAL_URL + action;
        const body = JSON.stringify(profile);

        const response = await fetch(registerURL, {
            headers: {
                "content-Type": "application/json"
            },
            method,
            body
        })

        const result = await response.json();
        if (!response.ok) {
            alert("We could not register this account. Please try again")
        } else {
            alert("You are now registered. Please log in to precede");
            setTimeout(function () {
                window.location.href = "/login.html";
            }, 2500);
        }

        return result;



    } catch (error) {
        console.log(error);
    }
}
