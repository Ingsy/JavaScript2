import { ProfileName, userName } from "../api/constants.mjs";

export function addProfileName() {
  ProfileName.innerHTML = `${userName}`;
}



