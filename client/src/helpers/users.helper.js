import { toast } from "react-toastify";

export const userHelper = {
  getTokenFromStorage,
  showSuccessMessage,
  showWarningMessage,
  showErrorMessage,
  dismissAllMessage,
  getUserFromStorage,
};

function getTokenFromStorage() {
  let token = null;
  try {
    token = JSON.parse(localStorage.getItem("token"));
    return token;
  } catch (error) {
    return null;
  }
}

function getUserFromStorage() {
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem("user"));
    return user;
  } catch (error) {
    return null;
  }
}

function showSuccessMessage(message) {
  toast.dismiss();
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
  });
}

function showWarningMessage(message) {
  toast.dismiss();
  toast.warn(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
  });
}

function showErrorMessage(message) {
  toast.dismiss();
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
  });
}

function dismissAllMessage() {
  toast.dismiss();
}
