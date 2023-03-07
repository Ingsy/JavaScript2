import { postIdUrl } from "../api/constants.mjs";
import { removePost } from "../posts/delete.mjs";
import { getPosts } from "../posts/read.mjs";


getPosts(postIdUrl).then(function () {
  const delBtn = document.querySelectorAll(".del-button");

  delBtn.forEach((delBtnId) => {
    delBtnId.addEventListener("click", function () {
      console.log(delBtnId.id);
      const confirmDelete = "please comfirm to delete this post";
      if (confirm(confirmDelete)) {
        removePost(4275);
      }
    });
  });
});
