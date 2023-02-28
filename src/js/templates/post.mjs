export function postTemplate(postData){
    return`
<div class="card">
<div class="contact-show">
<h4>${postData.id}</h4>
<img
  src=" ${postData.avatar}"
  class="card-img-top text-end"
  alt="profile-photo"
/>
</div>
<div class="card-body">
  <div class="text-center">
    <p class="card-text">
      ${postData.title}
    </p>
    <img src="${postData.media}" class="rounded card-img" alt="...">
  </div>
  <hr class="mb-0"><p class="text-start">
    <em>${postData.created}</em>
  </p>
<div class="contact-show">
<i class="fa fa-thumbs-up"></i>
<i class="fa fa-comment"></i>
<i class="fa fa-share"></i>
<a>edit</a>
<a>delete</a>
</div>
  </div>
</div>;`
};

export function renderPostTemplates(postData, parent) {
    parent.innerHTML = postTemplate(postData)
    parent.append(postTemplate(postData))
}
