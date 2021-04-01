import { put, takeLatest } from "redux-saga/effects";
import actionTypes from "../action/ActionTypes";
import * as nutritionAnalysisAction from "../action/NutritionAnalysis";

function* getSummary(payload) {
  const { data } = payload;
  const response = yield nutritionAnalysisAction.postRecipe(data);
  if (response)
    yield put({
      type: actionTypes.GET_NUTRITION_ANALYSIS_RECEIVED,
      payload: response,
    });
}

export default function* nutritionAnalysisWatcher() {
  yield takeLatest(actionTypes.GET_NUTRITION_ANALYSIS_REQUEST, getSummary);
}
