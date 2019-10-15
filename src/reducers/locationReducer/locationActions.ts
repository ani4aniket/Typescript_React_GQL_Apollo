/* eslint-disable import/prefer-default-export */
import { GetLocation, GET_LOCATION_DATA } from "./locationInterface";

export function fetchLocationData(lat: number, long: number): GetLocation {
  return {
    type: GET_LOCATION_DATA,
    query: {
      lat,
      long
    }
  };
}
