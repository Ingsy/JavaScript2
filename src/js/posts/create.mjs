import { authFetch } from "../api/authFetch.mjs";
import { API_SOCIAL_URL } from "../api/constants.mjs";
import { load } from "../storage/index.mjs";

const action = "/posts";
const method = "post";


/**
 * This async function sends an API "POST" request.
 * @param postData
 * * @param {string} createPostURL - The API + Method: this url sends a "POST" request
 * * @param {string} method - The HTTP request method "POST"
 */

export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;
  const token = load("token");
  const tagsArray = postData.tags.split(",");

  const response = await authFetch(createPostURL, {
    method,
    body: JSON.stringify({
      body: postData.body,
      title: postData.title,
      media: postData.media,
      tags: postData.tagsArray,
    }),
  });

  const post = await response.json();

  console.log(post);

  alert("congratz, you posted something!")
}
