//Array Methods filter()

import { 
  filterParam,
  postsWithImgbtn,
  postsWithoutImgbtn,
  allPostsbtn } from "../api/constants.mjs";



export async function filteredPosts (post) {

  postsWithImgbtn.innerHTML = `<a class="dropdown-item posts-img">Posts with images</a>`;
  postsWithoutImgbtn.innerHTML = `<a class="dropdown-item posts-no-img">Posts without images</a>`;
  allPostsbtn.innerHTML = `<a class="dropdown-item all-posts">Most recent Posts</a>`;
  if (filterParam === "posts_img") {
    postContainer.innerHTML = ""; 
    for (let i =0; i < post.length; i++){
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
      }
    }
     if (filterParam === "posts-no-img") {
         postContainer.innerHTML ="";
         for (let i = 0; i < post.length; i++) {
           if (!post[i].media) {
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
}
