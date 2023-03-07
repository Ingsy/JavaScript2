
import { getPosts } from "../posts/read.mjs";
import { 
  postsWithImgbtn,
  postsWithoutImgbtn,
  allPostsbtn,
  searchForm } from "../api/constants.mjs";


function renderPosts(posts){
  const postContainer = document.querySelector("#newsFeed");
  postContainer.innerHTML = "";
  for (let i = 0; i < posts.length; i++) {
    let postHtml = "";
    postHtml = `
    <div class="col mt-4">
        <div class="card">
            <div class="contact-show">
                <h4>${posts[i].id}</h4>
                <img
                      src="${posts[i].avatar}"
                      class="card-img-top text-end"
                      alt="avatar"
                    />
                </div>
                  <div class="card-body">
                  <div class="text-center">
                    <p class="card-text text-center mx-5">
                        ${posts[i].title}
                    </p>
                    <p class="card-text text-center mx-5">
                        ${posts[i].body}
                    </p>
                    `;
                    if (posts[i].media) {
                      postHtml += `<img src="${posts[i].media}" class="rounded card-img" alt="..."></img>`;
                    }
                    postHtml += `
                  </div>
                    <hr class="mb-0"><p class="text-start">
                    <em>${posts[i].created}</em>  
                    </p>
                    <div class="contact-show">
                      <i class="fa fa-thumbs-up"></i>
                      <i class="fa fa-comment"></i>
                      <button class="mb-2 edit-button btn btn-contact-posts"><a href="/editPost.html?id=${posts[i].id}">edit</a></button>
                      <button class="mb-2 del-button btn btn-contact-posts"><a class="del-button href="/index.html?id=${posts[i].id}">delete</a></button>
                    </div>
                    </div>
                  </div>
      </div>`;
      postContainer.innerHTML += postHtml;
  }
}

/**
 * This function will 
 */
//filter and search
//remember JsDocs 

export async function PostFeed(){
    const posts = await getPosts();
    postsWithImgbtn.addEventListener("click", function () {
      console.log("With images");
      const filtered = posts.filter(post=>post.media);
      renderPosts(filtered);
    });

    postsWithoutImgbtn.addEventListener("click", function () {
      console.log("Without images");
      const filtered = posts.filter(post=>!post.media);
      renderPosts(filtered);
    });

    allPostsbtn.addEventListener("click", async function () {
      console.log("All posts");
      renderPosts(posts);
    });

    searchForm.onkeyup = function (event) {
      const searchValue = event.target.value.trim().toLowerCase();
      const filteredSearch = posts.filter(function (posts){
        if (posts.title.toLowerCase().includes(searchValue)){
          return true;
        }
        if (posts.body.toLowerCase().includes(searchValue)){
          return true;
        }
        return false;
      });
      renderPosts(filteredSearch);
      if(filteredSearch.length === 0){
        alert("No posts found");
      }
      //const filteredSearch = posts.filter(post=>post.title.toLowerCase().includes(searchValue));
    };
}

export async function AllPosts(){
  let posts = await getPosts();
  renderPosts(posts);
}
