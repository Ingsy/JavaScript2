import { remove } from "/src/js/storage/index.mjs";

export function setLogOut () {
    remove.addEventListeners("click", (event) =>{
        localStorage.clear();
    });
}