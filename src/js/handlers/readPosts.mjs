import { API_BASE_URL } from "../api/constants.mjs";
import { getPosts } from "../posts/read.mjs";


export async function PostFeed(){
    const postContainer = document.querySelector("#newsFeed");
    const post = await getPosts();
    console.log("PostFeed");
for (let i = 0; i <post.length; i++) {
    if (post[i].media) {
        postContainer.innerHTML += `
        <div class="col mt-4">
                      <div class="card">
                        <div class="contact-show">
                        <h4>ID:${post[i].id}</h4>
                        <img
                          src="${post[i].avatar}"
                          class="card-img-top text-end"
                          alt="avatar"
                        />
                      </div>
                        <div class="card-body">
                        <div class="text-center">
                          <p class="card-text text-start mx-5">
                            ${post[i].title}
                          </p>
                          <img src="${post[i].media}" class="rounded card-img" alt="..."></img>
                          </div>
                          <hr class="mb-0"><p class="text-start">
                          <em>${post[i].created}</em>  
                          </p>
        <div class="contact-show">
          <i class="fa fa-thumbs-up"></i>
          <i class="fa fa-comment"></i>
          <button class="mb-2 edit-button btn btn-contact-posts">edit</button>
          <button class="mb-2 del-button btn btn-contact-posts">delete</button>
        </div>
                          </div>
                        </div>
                      </div>`
    }
     else {
         postContainer.innerHTML +=`
        <div class="col mt-4">
                  <div class="card">
                    <div class="contact-show">
                    <h4>${post[i].id}</h4>
                    <img
                      src="${post[i].avatar}"
                      class="card-img-top text-end"
                      alt="avatar"
                    />
                  </div>
                    <div class="card-body">
                      <p class="card-text text-start mx-5">
                        ${post[i].title}
                      </p> 
                      <hr class="mb-0"><p class="text-start">
                      <em>${post[i].created}</em>  
                      </p>
    <div class="contact-show">
      <i class="fa fa-thumbs-up"></i>
      <i class="fa fa-comment"></i>
      <button class="mb-2 edit-button btn btn-contact-posts">edit</button>
      <button class="mb-2 del-button btn btn-contact-posts">delete</button>
    </div>
                      </div>
                    </div>
                  </div>`
    }
}
}

   // if (form){
    //    form.addEventListener("submit", (event) => {
    //        event.preventDefault()
     //       const form = event.target;
     //       const formData = new FormData(form); 
     //       const post = Object.fromEntries(formData.entries())
    
            //Send it to the API 
      //      getPost(post)
     //   }) 
   // }
//}