import { client } from "../helpers/auth.header";

export const postService = {
  getPost,
  addNewPost,
};
const endPoint = "posts";
function getPost() {
  return client(null, endPoint, {
    method: "GET",
  });
}

function addNewPost(data) {
  return client(null, endPoint, {
    method: "POST",
    body: data,
  });
}
