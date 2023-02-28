import { getPosts } from "../posts/read.mjs";


export async function setReadPostsListener(){
    const form = document.querySelector("#newsFeed");

    if (form){
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form); 
            const post = Object.fromEntries(formData.entries())
    
            //Send it to the API 
            getPost(post)
        }) 
    }
}

async function renderPost(post, includeUrl) {

    for (let i = 0; i <post.lengt; i++) {
        if (post[i].media) {
            postsContainer.innerHTML += `
            <div class="col mt-4">
                          <div class="card">
                            <div class="contact-show">
                            <h4>${post[i].user.name}</h4>
                            <img
                              src="${post[i].user.avatar}"
                              class="card-img-top text-end"
                              alt="profile-photo"
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
              <i class="fa fa-share"></i>
              <a>edit</a>
              <a>delete</a>
            </div>
                              </div>
                            </div>
                          </div>`
        }
         else {
             postsContainer.innerHTML +=`
            <div class="col mt-4">
                      <div class="card">
                        <div class="contact-show">
                        <h4>${post[i].user.name}</h4>
                        <img
                          src="${post[i].user.avatar}"
                          class="card-img-top text-end"
                          alt="profile-photo"
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
          <i class="fa fa-share"></i>
          <a>edit</a>
          <a>delete</a>
        </div>
                          </div>
                        </div>
                      </div>`
        }
    }
}


