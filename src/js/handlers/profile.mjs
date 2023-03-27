import { ProfileName, userName } from "../api/constants.mjs";

export function ProfileName() {
    ProfileName.innerHTML = `${userName}`;
}

ProfileName();