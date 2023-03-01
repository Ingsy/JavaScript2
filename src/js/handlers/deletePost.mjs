import { API_SOCIAL_URL } from "../api/constants.mjs";
import { removePost } from "../posts/delete.mjs";
import { getPosts } from "../posts/read.mjs";

const postUrl = "https://api.noroff.dev/api/v1/social/posts?_author=true";

getPosts(postUrl).then(function () {
  const delBtn = document.querySelectorAll(".del-button");

  delBtn.forEach((delBtnId) => {
    delBtnId.addEventListener("click", function () {
      console.log(delBtnId.id);
      const confirmDelete = "please comfirm to delete this post";
      if (confirm(confirmDelete)) {
        removePost(delBtnId.id);
      }
    });
  });
});
