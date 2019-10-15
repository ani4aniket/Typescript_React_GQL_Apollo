import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  RequestQueryInterface,
  GetLocation,
  GetLocationSuccess,
  GetLocationFail,
  GET_LOCATION_DATA,
  GET_LOCATION_DATA_SUCCESS,
  GET_LOCATION_DATA_FAIL
} from "../reducers/locationReducer/locationInterface";

function getLocationData(requestQuery: RequestQueryInterface) {
  return axios.get(
    `https://api.airbuk.com/lat_long_info?latitude=${encodeURIComponent(
      requestQuery.lat.toString()
    )}&longitude=${encodeURIComponent(requestQuery.long.toString())}`
  );
}

function* fetchLocationData(actionObj: GetLocation) {
  try {
    const apiData = yield call(getLocationData, actionObj.query);
    yield put<GetLocationSuccess>({
      type: GET_LOCATION_DATA_SUCCESS,
      apiData: {
        location: apiData.data.locations[0],
        airport: apiData.data.airports[0]
      }
    });
  } catch (ex) {
    yield put<GetLocationFail>({
      type: GET_LOCATION_DATA_FAIL
    });
  }
}

export default [takeLatest(GET_LOCATION_DATA, fetchLocationData)];
