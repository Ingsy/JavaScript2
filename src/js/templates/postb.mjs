export function postTemplateB(postData){
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerText = postData.title;
    const button = document.createElement("button");
    post.append(button);

    button.addEventListener("click", () => console.log(postData))

    if(postData.media){
        const img = document.createElement("img");
        img.src = postData.media;
        img.alt = `Image from ${postData.title}`
        post.append(img)
    }
    return post;
}



export function renderPostTemplate(postData, parent){
    parent.append(postTemplateB(postData))
}

//list of posts 
export function renderPostTemplates(postDataList, parent){

   parent.append(...postDataList.map(postTemplateB))
}