import { userHelper } from "./users.helper";

 export const authHeader = {
    main,
 }

 function main() {
     let token = userHelper.getTokenFromStorage();
     let headers = new Headers();
     headers.append("content-type", "application/json");

     if (token) headers.append("Authorization", "Bearer " + token);

	return headers;
 }