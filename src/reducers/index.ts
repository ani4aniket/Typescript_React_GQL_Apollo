import { combineReducers } from "redux";

import authReducer from "./authReducer/authReducer";
import locationReducer from "./locationReducer/locationReducer";
import productReducer from "./productReducer/productReducer";

import { AuthModel } from "./authReducer/authInterface";
import { GetLocationModel } from "./locationReducer/locationInterface";
import { UploadProductImageModel } from "./productReducer/productInterface";

export interface StoreInterface {
  authData: AuthModel;
  locationData: GetLocationModel;
  product: UploadProductImageModel;
}

export default combineReducers<StoreInterface>({
  authData: authReducer,
  locationData: locationReducer,
  product: productReducer
});
