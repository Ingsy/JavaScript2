import { getPost } from "../posts/read.mjs";



export async function singlePost() {
    const seePost = queryselectorAll("see-Post");

    for (let i = 0; i < seePost.length; i++) {
        seePost[i].addEventListener("click", async () => {
            const seeThis = "wanne see only this Post?";

            if (confirm(seeThis)) {
                await getPost(seePost[i].id);
            }
        });
    }
}
