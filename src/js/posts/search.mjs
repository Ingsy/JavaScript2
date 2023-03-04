import { searchForm } from "../api/constants.mjs";

export function searchPosts(posts){
  searchForm.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredSearch = posts.filter(function (posts){
      if (posts.title.toLowerCase().includes(searchValue)){
        return true;
      }
    });
    displaysearchPosts(filteredSearch);
  };
}

export function displaysearchPosts(posts){
  postsContainer.innerHTM = "";
  posts.forEach(function (post) {
      const {title, media, body, id, created, tags} = post;
      const { avatar, name } = post.author
      if (post.media) {
          postsContainer.innerHTML += `<div class="col mt-4">
          <div class="card">
            <div class="contact-show">
            <h4>ID:${name}</h4>
            <img
              src="${avatar}"
              class="card-img-top text-end"
              alt="avatar"
            />
          </div>
            <div class="card-body">
            <div class="text-center">
              <p class="card-text text-start mx-5">
                ${title}
              </p>
              <img src="${media}" class="rounded card-img" alt="..."></img>
              </div>
              <hr class="mb-0"><p class="text-start">
              <em>${created}</em>  
              </p>
<div class="contact-show">
<i class="fa fa-thumbs-up">Tags:${tags}</i>
<i class="fa fa-comment">${id}</i>
<button class="mb-2 edit-button btn btn-contact-posts">edit</button>
<button class="mb-2 del-button btn btn-contact-posts">delete</button>
</div>
              </div>
            </div>
          </div>`;
}
else {
searchform.innerHTML +=`
<div class="col mt-4">
      <div class="card">
        <div class="contact-show">
        <h4>${name}</h4>
        <img
          src="${avatar}"
          class="card-img-top text-end"
          alt="avatar"
        />
      </div>
        <div class="card-body">
          <p class="card-text text-start mx-5">
            ${title}
          </p> 
          <hr class="mb-0"><p class="text-start">
          <em>${created}</em>  
          </p>
<div class="contact-show">
<i class="fa fa-thumbs-up">${tags}</i>
<i class="fa fa-comment">${id}</i>
<button class="mb-2 edit-button btn btn-contact-posts">edit</button>
<button class="mb-2 del-button btn btn-contact-posts">delete</button>
</div>
          </div>
        </div>
      </div>`

      }
  });
}


