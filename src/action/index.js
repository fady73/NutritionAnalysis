import actionTypes from "./ActionTypes";

export const getNutrition = (data) => ({
  type: actionTypes.GET_NUTRITION_ANALYSIS_REQUEST,
  data,
});
