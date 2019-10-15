import { call, put, takeLatest } from "redux-saga/effects";
import { RNS3 } from "react-native-aws3";
import store from "../reducers/createStore";
import {
  RequestImageData,
  UPLOAD_PRODUCT_IMAGE_INITIATED,
  UploadProductImageInitiated,
  UploadProductImageSuccess,
  UPLOAD_PRODUCT_IMAGE_SUCCESS,
  UPLOAD_PRODUCT_IMAGE_PROGRESS,
  UploadProductImageFail,
  UPLOAD_PRODUCT_IMAGE_FAIL
} from "../reducers/productReducer/productInterface";

interface Loader {
  loaded: number;
  total: number;
}

function uploadProductImage(requestQuery: RequestImageData) {
  const {
    uri,
    name,
    type,
    bucket,
    region,
    accessKey,
    secretKey,
    successActionStatus
  } = requestQuery;
  return RNS3.put(
    {
      uri,
      name,
      type
    },
    {
      bucket,
      region,
      accessKey,
      secretKey,
      successActionStatus
    }
  ).progress((e: Loader) => {
    store.dispatch({
      type: UPLOAD_PRODUCT_IMAGE_PROGRESS,
      progress: e.loaded / e.total
    });
  });
}

function* uploadProductImageInitiated(actionObj: UploadProductImageInitiated) {
  const apiData = yield call(uploadProductImage, actionObj.request);

  if (apiData.status === 201) {
    yield put<UploadProductImageSuccess>({
      type: UPLOAD_PRODUCT_IMAGE_SUCCESS,
      response: {
        bucket: apiData.body.postResponse.bucket,
        etag: apiData.body.postResponse.etag,
        key: apiData.body.postResponse.key,
        location: apiData.body.postResponse.location
      }
    });
  } else {
    yield put<UploadProductImageFail>({
      type: UPLOAD_PRODUCT_IMAGE_FAIL,
      response: {
        headers: apiData.headers,
        status: apiData.status,
        text: apiData.text
      }
    });
  }
}

export default [
  takeLatest(UPLOAD_PRODUCT_IMAGE_INITIATED, uploadProductImageInitiated)
];
