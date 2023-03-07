import { removePost } from "../posts/delete.mjs";


export async function deletePost (){
  const delBtn = document.querySelectorAll(".del-button");

  for (let i = 0; i < delBtn.length; i++){
    delBtn[i].addEventListener("click", () => {
      const delConfirm = "Are you sure you want to delete this post?";

      if (confirm(delConfirm)) {
        removePost(delBtn[i].id);
        window.location.reload();
        alert("oops! not possible to delete other users post");
      }
    });
  }
}


