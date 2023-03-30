import { getPosts } from "../posts/read.mjs";
import {
  postsWithImgbtn,
  postsWithoutImgbtn,
  allPostsbtn,
  searchForm,
  searchInput,
  userName,
  MyPostsOnly
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
                <h4>${posts[i].author.name}</h4>`;
    if (posts[i].avatar) {
      postHtml += `<img
      src="${posts[i].avatar}"
      class="card-img-top text-end"
      alt="avatar"
    />`;
    }
    postHtml += `
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
                    <em class="text-end">id:${posts[i].id}</em> 
                    </p>
                    <div class="contact-show">
                    <button class="mb-2 see-Post btn btn-contact-posts"><a href="/single-post.html?id=${posts[i].id}">see this post</a></button>`;
    if (posts[i].author.name === userName) {
      postHtml += ` <button class="mb-2 edit-button btn btn-contact-posts"><a href="/editPost.html?id=${posts[i].id}">edit</a></button>
      <button class="mb-2 del-button btn btn-contact-posts" id="${posts[i].id}">delete</button>`;
    }
    postHtml += ` 
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

  MyPostsOnly.addEventListener("click", function () {
    const filtered = posts.filter(post => post.author.name === userName);
    displayPosts(filtered, "#newsFeed");
  });

  allPostsbtn.addEventListener("click", async function () {
    displayPosts(posts, "#newsFeed");
  });

  function doSearch(searchValue) {
    const filteredSearch = posts.filter(function (post) {
      if (post.title.toLowerCase().includes(searchValue)) {
        return true;
      }
      if (post.body && post.body.toLowerCase().includes(searchValue)) {
        return true;
      }
      if (post.author.name.toLowerCase().includes(searchValue)) {
        return true;
      }
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

  // onchange only fires when input not in focus
  searchInput.onchange = (event) => doSearch(event.target.value.trim().toLowerCase());
  searchForm.onsubmit = (event) => {
    event.preventDefault();

    doSearch(searchInput.value);
    return false;
  }
};

export async function AllPosts() {
  let posts = await getPosts();
  displayPosts(posts, "#newsFeed");

  deletePost();
}




