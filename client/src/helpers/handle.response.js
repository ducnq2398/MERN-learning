import { authenticationService } from "../services";
import parse from "html-react-parser";

export function handleResponse(response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(parse(text));

        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 Unauthorized response returned from api
                authenticationService.login();
            }
            return Promise.reject(data);
        }

        return data;
    });
}