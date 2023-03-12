import { getPosts } from "../posts/read.mjs";
import {
  postsWithImgbtn,
  postsWithoutImgbtn,
  allPostsbtn,
  searchForm
} from "../api/constants.mjs";
import { deletePost } from "./deletePost.mjs";

export function displayPosts(posts, containerId) {
  const postContainer = document.querySelector(containerId);
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
                    <button class="mb-2 see-Post btn btn-contact-posts"><a href="/single-post.html?id=${posts[i].id}">see this post</a></button>
                      <button class="mb-2 edit-button btn btn-contact-posts"><a href="/editPost.html?id=${posts[i].id}">edit</a></button>
                     <button class="mb-2 del-button btn btn-contact-posts" id="${posts[i].id}">delete</button>
                    </div>
                    </div>
                  </div>
      </div>`;
    postContainer.innerHTML += postHtml;
  }
}


//function search -feed -filter

export async function PostFeed() {
  const posts = await getPosts();
  postsWithImgbtn.addEventListener("click", function () {
    const filtered = posts.filter(post => post.media);
    displayPosts(filtered, "#newsFeed");
  });

  postsWithoutImgbtn.addEventListener("click", function () {
    const filtered = posts.filter(post => !post.media);
    displayPosts(filtered, "#newsFeed");
  });

  allPostsbtn.addEventListener("click", async function () {
    displayPosts(posts, "#newsFeed");
  });

  searchForm.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredSearch = posts.filter(function (post) {
      if (post.title.toLowerCase().includes(searchValue)) {
        return true;
      }
      if (post.body.toLowerCase().includes(searchValue)) {
        return true;
      }
      console.log(post);
      if (post.id.toString().includes(searchValue)) {
        return true;
      }
      return false;
    });
    displayPosts(filteredSearch, "#newsFeed");
    if (filteredSearch.length === 0) {
      alert("No posts found");
    }

  };
}

export async function AllPosts() {
  let posts = await getPosts();
  displayPosts(posts, "#newsFeed");

  deletePost();
}




