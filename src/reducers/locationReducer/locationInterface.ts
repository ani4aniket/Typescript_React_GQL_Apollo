export const GET_LOCATION_DATA = "GET_LOCATION_DATA";
type GET_LOCATION_DATA = typeof GET_LOCATION_DATA;
export const GET_LOCATION_DATA_SUCCESS = "GET_LOCATION_DATA_SUCCESS";
type GET_LOCATION_DATA_SUCCESS = typeof GET_LOCATION_DATA_SUCCESS;
export const GET_LOCATION_DATA_FAIL = "GET_LOCATION_DATA_FAIL";
type GET_LOCATION_DATA_FAIL = typeof GET_LOCATION_DATA_FAIL;

export interface RequestQueryInterface {
  lat: number;
  long: number;
}

interface ResponseLocationData {
  id: string;
  lat: string;
  lon: string;
  name: string;
  region: string;
  sub_region: string; // eslint-disable-line camelcase
  country_code: string; // eslint-disable-line camelcase
}

interface ResponseAirportData {
  id: string;
  name: string;
  latitude: string;
  longitude: string;
  iso_country: string; // eslint-disable-line camelcase
  iso_region: string; // eslint-disable-line camelcase
  iata_code: string; // eslint-disable-line camelcase
  type: string;
}

export interface ResponseInterface {
  location: ResponseLocationData;
  airport: ResponseAirportData;
}

export interface GetLocation {
  type: GET_LOCATION_DATA;
  query: RequestQueryInterface;
}

export interface GetLocationSuccess {
  type: GET_LOCATION_DATA_SUCCESS;
  apiData: ResponseInterface;
}

export interface GetLocationFail {
  type: GET_LOCATION_DATA_FAIL;
}

export interface GetLocationModel {
  request: RequestQueryInterface | null;
  response: ResponseInterface | null;
}

export type GetLocationAction =
  | GetLocation
  | GetLocationSuccess
  | GetLocationFail;
