import { all, fork } from "redux-saga/effects";
import nutritionAnalysisWatcher from "./nutritionAnalysisSaga";

export default function* rootSaga() {
  yield all([fork(nutritionAnalysisWatcher)]);
}
