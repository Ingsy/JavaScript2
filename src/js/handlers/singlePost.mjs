import { getPost } from "../posts/read.mjs";
import { displayPosts } from "./displayPosts.mjs";



export async function singlePost() {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    const post = await getPost(id);
    displayPosts([post], "#singlePost");

}




