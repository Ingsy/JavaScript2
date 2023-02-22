import { load } from "../storage/index.mjs";



export function headers() {
    const token = load("token");
    return {
        "content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}

export async function authFetch(url, options) {
    console.log(headers())
    return fetch(url, {
        ...options,
        headers: headers()
    });
};