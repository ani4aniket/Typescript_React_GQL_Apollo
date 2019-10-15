import {
  UPLOAD_PRODUCT_IMAGE_FAIL,
  UPLOAD_PRODUCT_IMAGE_INITIATED,
  UPLOAD_PRODUCT_IMAGE_PROGRESS,
  UPLOAD_PRODUCT_IMAGE_SUCCESS,
  UPLOAD_PRODUCT_IMAGE_REMOVE_STATUS_MESSAGE,
  UploadProductImageInitiated,
  UploadProductImageProgress,
  UploadProductImageFail,
  UploadProductImageSuccess,
  ImageType,
  UploadProductImageRemoveStatusMessage
} from "./productInterface";

export function uploadProductImageInitiated(
  uri: URL,
  name: string,
  type: ImageType,
  bucket: string,
  region: string,
  accessKey: string,
  secretKey: string,
  successActionStatus: number
): UploadProductImageInitiated {
  return {
    type: UPLOAD_PRODUCT_IMAGE_INITIATED,
    request: {
      uri,
      name,
      type,
      bucket,
      region,
      accessKey,
      secretKey,
      successActionStatus
    }
  };
}

export function uploadProductImageFail(
  headers: Object,
  status: number,
  text: string
): UploadProductImageFail {
  return {
    type: UPLOAD_PRODUCT_IMAGE_FAIL,
    response: {
      headers,
      status,
      text
    }
  };
}

export function uploadProductImageSuccess(
  bucket: string,
  etag: string,
  key: string,
  location: URL
): UploadProductImageSuccess {
  return {
    type: UPLOAD_PRODUCT_IMAGE_SUCCESS,
    response: {
      bucket,
      etag,
      key,
      location
    }
  };
}

export function uploadProductImageProgress(
  progress: number
): UploadProductImageProgress {
  return {
    type: UPLOAD_PRODUCT_IMAGE_PROGRESS,
    progress
  };
}

export function uploadProductImageRemoveStatusMessage(): UploadProductImageRemoveStatusMessage {
  return { type: UPLOAD_PRODUCT_IMAGE_REMOVE_STATUS_MESSAGE };
}
