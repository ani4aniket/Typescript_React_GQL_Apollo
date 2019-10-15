import {
  GetLocationModel,
  GetLocationAction,
  GET_LOCATION_DATA,
  GET_LOCATION_DATA_SUCCESS,
  GET_LOCATION_DATA_FAIL
} from "./locationInterface";

const initialState: GetLocationModel = {
  request: null,
  response: null
};

export default function getLocationReducer(
  state = initialState,
  action: GetLocationAction
) {
  switch (action.type) {
    case GET_LOCATION_DATA:
      return {
        ...state,
        request: action.query
      };
    case GET_LOCATION_DATA_SUCCESS:
      return {
        ...state,
        response: action.apiData
      };
    case GET_LOCATION_DATA_FAIL:
      return {
        ...state
      };
    default:
      return state;
  }
}
