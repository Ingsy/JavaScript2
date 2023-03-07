export const API_HOST_URL = "https://api.noroff.dev";
export const API_BASE_URL = "/api/v1";
export const API_SOCIAL_BASE = "/social";
export const API_SOCIAL_URL = `${API_HOST_URL}${API_BASE_URL}${API_SOCIAL_BASE}`;



export const params = new URLSearchParams(window.location.search);
export const postID = params.get("postID");
export const postIdUrl = `${API_SOCIAL_URL}posts/${postID}?_author=true`;
export const searchForm = document.querySelector("#searchform")

export const filterParam = params.get("filter");
//buttons 

export const postsWithImgbtn = document.querySelector(".posts-img");
export const postsWithoutImgbtn = document.querySelector(".posts-no-img");
export const allPostsbtn = document.querySelector(".all-posts");
export const myPosts = document.querySelector(".MyPosts")

