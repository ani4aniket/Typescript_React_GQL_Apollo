export const UPLOAD_PRODUCT_IMAGE_INITIATED = "UPLOAD_PRODUCT_IMAGE_INITIATED";
type UPLOAD_PRODUCT_IMAGE_INITIATED = typeof UPLOAD_PRODUCT_IMAGE_INITIATED;
export const UPLOAD_PRODUCT_IMAGE_SUCCESS = "UPLOAD_PRODUCT_IMAGE_SUCCESS";
type UPLOAD_PRODUCT_IMAGE_SUCCESS = typeof UPLOAD_PRODUCT_IMAGE_SUCCESS;
export const UPLOAD_PRODUCT_IMAGE_FAIL = "UPLOAD_PRODUCT_IMAGE_FAIL";
type UPLOAD_PRODUCT_IMAGE_FAIL = typeof UPLOAD_PRODUCT_IMAGE_FAIL;
export const UPLOAD_PRODUCT_IMAGE_PROGRESS = "UPLOAD_PRODUCT_IMAGE_PROGRESS";
type UPLOAD_PRODUCT_IMAGE_PROGRESS = typeof UPLOAD_PRODUCT_IMAGE_PROGRESS;
export const UPLOAD_PRODUCT_IMAGE_REMOVE_STATUS_MESSAGE =
  "UPLOAD_PRODUCT_IMAGE_REMOVE_STATUS_MESSAGE";
type UPLOAD_PRODUCT_IMAGE_REMOVE_STATUS_MESSAGE = typeof UPLOAD_PRODUCT_IMAGE_REMOVE_STATUS_MESSAGE;

export interface ResponseImageSuccessData {
  bucket: string;
  etag: string;
  key: string;
  location: URL;
}

export interface ResponseImageErrorData {
  headers: Object;
  status: number;
  text: string;
}

export type ImageType = "image/png" | "image/jpg" | "image/jpeg";

export interface RequestImageData {
  uri: URL;
  name: string;
  type: ImageType;
  bucket: string;
  region: string;
  accessKey: string;
  secretKey: string;
  successActionStatus: number;
}

export interface UploadProductImageInitiated {
  type: UPLOAD_PRODUCT_IMAGE_INITIATED;
  request: RequestImageData;
}

export interface UploadProductImageSuccess {
  type: UPLOAD_PRODUCT_IMAGE_SUCCESS;
  response: ResponseImageSuccessData;
}

export interface UploadProductImageFail {
  type: UPLOAD_PRODUCT_IMAGE_FAIL;
  response: ResponseImageErrorData;
}

export interface UploadProductImageProgress {
  type: UPLOAD_PRODUCT_IMAGE_PROGRESS;
  progress: number;
}

export interface UploadProductImageRemoveStatusMessage {
  type: UPLOAD_PRODUCT_IMAGE_REMOVE_STATUS_MESSAGE;
}

export interface UploadProductImageModel {
  request: RequestImageData | null;
  response: ResponseImageSuccessData | null;
  progress: number;
  loading: boolean;
  message: string | null;
}

export type ProductAction =
  | UploadProductImageInitiated
  | UploadProductImageSuccess
  | UploadProductImageFail
  | UploadProductImageProgress
  | UploadProductImageRemoveStatusMessage;
