import http from "../http.js";
import notify from "../component/toaster/index";
import { YOUR_APP_ID, YOUR_APP_KEY } from "../Constant/constant";

export const postRecipe = async (payload) => {
  try {
    const response = await http.post(
      `/nutrition-details?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`,
      payload
    );
    return response;
  } catch (e) {
    notify(e.message);
    return null;
  }
};
