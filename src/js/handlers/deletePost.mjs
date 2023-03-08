import { removePost } from "../posts/delete.mjs";


export async function deletePost (){
  const delBtn = document.querySelectorAll(".del-button");

  for (let i = 0; i < delBtn.length; i++){
    delBtn[i].addEventListener("click", () => {
      const delConfirm = "Are you sure you want to delete this post?";

      if (confirm(delConfirm)) {
        removePost(delBtn[i].id);
        
        console.log("works?", delBtn[i]);
        window.location.reload();
      }
    });
  }
}

