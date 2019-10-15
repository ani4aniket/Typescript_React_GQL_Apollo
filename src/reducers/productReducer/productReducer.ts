import {
  ProductAction,
  UPLOAD_PRODUCT_IMAGE_FAIL,
  UPLOAD_PRODUCT_IMAGE_INITIATED,
  UPLOAD_PRODUCT_IMAGE_SUCCESS,
  UPLOAD_PRODUCT_IMAGE_PROGRESS,
  UploadProductImageModel,
  UPLOAD_PRODUCT_IMAGE_REMOVE_STATUS_MESSAGE
} from "./productInterface";
import { IMAGE_UPLOAD } from "../../utils/constants";

const initialState: UploadProductImageModel = {
  request: null,
  response: null,
  progress: 0,
  loading: false,
  message: null
};

export default function getLocationReducer(
  state = initialState,
  action: ProductAction
) {
  switch (action.type) {
    case UPLOAD_PRODUCT_IMAGE_INITIATED:
      return {
        ...state,
        loading: true,
        request: action.request
      };
    case UPLOAD_PRODUCT_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.response,
        message: IMAGE_UPLOAD.SUCCESS
      };
    case UPLOAD_PRODUCT_IMAGE_PROGRESS:
      return {
        ...state,
        progress: action.progress
      };
    case UPLOAD_PRODUCT_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        message: IMAGE_UPLOAD.FAIL
      };
    case UPLOAD_PRODUCT_IMAGE_REMOVE_STATUS_MESSAGE:
      return {
        ...state,
        message: null
      };
    default:
      return state;
  }
}
