import AsyncStorage from "@react-native-async-storage/async-storage";
import { showToast } from "../utils/help";

async function storeUserSession(uid, sessionState) {
  try {
    await AsyncStorage.setItem("user_uid", uid);
    await AsyncStorage.setItem("user_is_logged_in", sessionState);
  } catch (error) {
    showToast("error", error.message);
  }
}

function getUserId() {
  var uid = "";

  AsyncStorage.getItem("user_uid")
    .then((response) => {
      uid = response;
      return uid;
    })
    .catch((error) => {
      showToast("error", error.message);
    });

  return uid;
}

function getUserLoggedInStatus() {
  var isLoggedIn = "";

  AsyncStorage.getItem("user_is_logged_in")
    .then((response) => {
      isLoggedIn = response;
      return isLoggedIn;
    })
    .catch((error) => {
      showToast("error", error.message);
    });

  return isLoggedIn;
}

export { storeUserSession, getUserLoggedInStatus, getUserId };
