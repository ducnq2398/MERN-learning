import qs from "qs";
import { authenticationService } from "../services";
import { userHelper } from "./users.helper";
import { apiConfigs } from "../constants/api.config";

async function client(
  baseUrl,
  endpoint,
  { body, params, ...customConfig } = {}
) {
  const token = userHelper.getTokenFromStorage();
  const headers = {};

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  } else {
    headers["content-type"] = "application/x-www-form-urlencoded";
  }

  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    if (body instanceof FormData) {
      config.body = body;
    } else {
      // headers['content-type'] = 'application/json'
      if (endpoint === "oauth/token") {
        config.body = qs.stringify(body);
      } else {
        config.body = JSON.stringify(body);
        config.headers = {
          ...config.headers,
          ["content-type"]: "application/json",
        };
      }
    }
  }

  const queryParams = params
    ? `?${new URLSearchParams(params).toString()}`
    : "";

  return window
    .fetch(
      `${
        baseUrl ? baseUrl : apiConfigs.REACT_APP_BASE_URL_API
      }/${endpoint}${queryParams}`,
      config
    )
    .then(async (response) => {
      if (response.status === 401) {
        await authenticationService.login();
        // refresh the page for them
        window.location.assign(window.location);
        return Promise.reject({ message: "Please re-authenticate." });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

export { client };
