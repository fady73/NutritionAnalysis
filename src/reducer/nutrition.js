import actionTypes from "../action/ActionTypes";

const initialState = {
  data: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_NUTRITION_ANALYSIS_REQUEST:
      return { ...state, data: null };
    case actionTypes.GET_NUTRITION_ANALYSIS_RECEIVED:
      console.log(action);
      return {
        ...state,
        data: { ...action.payload },
      };

    default:
      return state;
  }
}
