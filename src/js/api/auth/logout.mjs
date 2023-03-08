import { remove } from "/src/js/storage/index.mjs";


export function setLogOut () {

    const logout = document.querySelector ("#logout")

    if(logout){ 
        remove.addEventListeners("click", (event) =>{
        localStorage.clear();
        window.location.reload();

        setLogOut();
    });
}   
}