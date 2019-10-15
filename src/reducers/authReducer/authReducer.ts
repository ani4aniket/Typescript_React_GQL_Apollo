import {
  AuthActions,
  AuthModel,
  GET_USER_TOKENS,
  GET_USER_TOKENS_SUCCESS,
  GET_USER_TOKENS_FAIL
} from "./authInterface";
import { NETWORK_CALL_STATUS } from "../../utils";

const initialState: AuthModel = {
  userTokensNetworkStatus: NETWORK_CALL_STATUS.NONE,
  userTokensRequest: null,
  userTokensResponse: null
};

export default function authReducer(
  state = initialState,
  action: AuthActions
): AuthModel {
  switch (action.type) {
    case GET_USER_TOKENS:
      return {
        ...state,
        userTokensNetworkStatus: NETWORK_CALL_STATUS.PENDING,
        userTokensRequest: action.requestBody
      };
    case GET_USER_TOKENS_SUCCESS:
      return {
        ...state,
        userTokensNetworkStatus: NETWORK_CALL_STATUS.SUCCESS,
        userTokensResponse: action.data
      };
    case GET_USER_TOKENS_FAIL:
      return {
        ...state,
        userTokensNetworkStatus: NETWORK_CALL_STATUS.FAIL
      };
    default:
      return state;
  }
}
