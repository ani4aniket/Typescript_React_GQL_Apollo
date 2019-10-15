import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  GetUserTokensRequestBody,
  GRANT_TYPES,
  GetUserTokens,
  GetUserTokensFail,
  GET_USER_TOKENS_SUCCESS,
  GET_USER_TOKENS_FAIL,
  GetUserTokensSuccess,
  GET_USER_TOKENS
} from "../reducers/authReducer/authInterface";

function getUserTokens(requestBody: GetUserTokensRequestBody) {
  const formData = new URLSearchParams();

  formData.append("client_id", requestBody.clientId);
  formData.append("client_secret", requestBody.clientSecret);
  formData.append("grant_type", requestBody.grantType);
  if (requestBody.grantType === GRANT_TYPES.AUTHORIZATION_CODE) {
    formData.append("code", requestBody.code);
    formData.append("redirect_uri", requestBody.redirectUri);
  } else if (requestBody.grantType === GRANT_TYPES.REFRESH_TOKEN) {
    formData.append("refresh_token", requestBody.refreshToken);
  }

  return axios.post(
    "https://keycloak.airbuk.com/auth/realms/master/protocol/openid-connect/token",
    formData
  );
}

function getUserDetails(accessToken: string) {
  return axios.get(
    "https://keycloak.airbuk.com/auth/realms/master/protocol/openid-connect/userinfo",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
}

function* fetchUserTokens(actionObj: GetUserTokens) {
  try {
    const userTokens = yield call(getUserTokens, actionObj.requestBody);
    const userDetails = yield call(
      getUserDetails,
      userTokens.data.access_token
    );
    yield put<GetUserTokensSuccess>({
      type: GET_USER_TOKENS_SUCCESS,
      data: {
        accessToken: userTokens.data.access_token,
        refreshToken: userTokens.data.refresh_token,
        userId: userDetails.data.sub,
        firstName: userDetails.data.given_name,
        lastName: userDetails.data.family_name,
        email: userDetails.data.email
      }
    });
  } catch (ex) {
    yield put<GetUserTokensFail>({
      type: GET_USER_TOKENS_FAIL
    });
  }
}

export default [takeLatest(GET_USER_TOKENS, fetchUserTokens)];
