
import * as listener from "./handlers/index.mjs";

export default function router() {
    const path = location.pathname; 

    switch (path) {
        case "/login/":
            listeners.setLoginFormListener()
            return;
        case "/register/":
            listeners.setRegisterFormListener()
            return;
        case "/post/create/":
            listeners.setCreateFormListener()
            return;
        case "/post/edit/":
            listeners.setUpdateFormListener()
            return;
    }
}


