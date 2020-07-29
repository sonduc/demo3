import Ls from "./jwt.service.js";
import toastr from "toastr";
import ApiService from "@/service/api.service.js";

export default {
  async login(loginData) {
    try {
      let response = await ApiService.post("login-fe", {
        username: loginData.email,
        password: loginData.password
      });
      Ls.saveToken(response.data.data.access_token);
      toastr["success"]("Logged In!", "Success");
      return response.data.data.access_token;
    } catch (error) {
      if (error.response.status === 401) {
        toastr["error"]("Invalid Credentials", "Error");
      } else {
        toastr["error"](error.response.data.data.errors[0], "Error");
      }
    }
  },

  async logout() {
    try {
      await ApiService.get("logout");

      Ls.destroyToken();
      toastr["success"]("Logged out!", "Success");
    } catch (error) {
      // console.log("Error", error.message);
    }
  },

  async check() {
    let response = Ls.getToken();
    // console.log(response);

    return !!response;
  },
};
