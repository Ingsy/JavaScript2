export function setsearchFormListener(){
    const form = document.querySelector("#searchform");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    const created = url.searchParams.get("created");

    if (form){
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form); 
            const search = Object.fromEntries(formData.entries());
    
            //Send it to the API 
            searchUser(search);
        }); 
    };
}