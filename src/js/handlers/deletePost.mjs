
import { removePost } from "../posts/delete.mjs";


export async function deletePost (){
  const delBtn = document.querySelectorAll(".del-button");

  for (let i = 0; i < delBtn.length; i++){
    delBtn[i].addEventListener("click", () => {
      const delConfirm = "Are you sure you want to delete this post?";

      if (confirm(delConfirm)) {
        removePost(delBtn[i].id);
        console.log("works?");
        window.location.reload();
      }
    });
  }
}

=======
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
