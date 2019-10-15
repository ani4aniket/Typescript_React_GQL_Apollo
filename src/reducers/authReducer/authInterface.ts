import { NETWORK_CALL_STATUS } from "../../utils";

export const GET_USER_TOKENS = "GET_USER_TOKENS";
type GET_USER_TOKENS = typeof GET_USER_TOKENS;
export const GET_USER_TOKENS_SUCCESS = "GET_USER_TOKENS_SUCCESS";
type GET_USER_TOKENS_SUCCESS = typeof GET_USER_TOKENS_SUCCESS;
export const GET_USER_TOKENS_FAIL = "GET_USER_TOKENS_FAIL";
type GET_USER_TOKENS_FAIL = typeof GET_USER_TOKENS_FAIL;

export enum GRANT_TYPES {
  AUTHORIZATION_CODE = "authorization_code",
  REFRESH_TOKEN = "refresh_token"
}

export interface GetUserTokensRequestBase {
  clientId: string;
  clientSecret: string;
}

interface TokensByAuthorizationCode extends GetUserTokensRequestBase {
  grantType: GRANT_TYPES.AUTHORIZATION_CODE;
  code: string;
  redirectUri: string;
}

interface TokensByRefreshToken extends GetUserTokensRequestBase {
  grantType: GRANT_TYPES.REFRESH_TOKEN;
  refreshToken: string;
}

export type GetUserTokensRequestBody =
  | TokensByAuthorizationCode
  | TokensByRefreshToken;

export interface GetUserTokensResponseData {
  accessToken: string;
  refreshToken: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthModel {
  userTokensNetworkStatus: NETWORK_CALL_STATUS;
  userTokensRequest: GetUserTokensRequestBody | null;
  userTokensResponse: GetUserTokensResponseData | null;
}

export interface GetUserTokens {
  type: GET_USER_TOKENS;
  requestBody: GetUserTokensRequestBody;
}

export interface GetUserTokensSuccess {
  type: GET_USER_TOKENS_SUCCESS;
  data: GetUserTokensResponseData;
}

export interface GetUserTokensFail {
  type: GET_USER_TOKENS_FAIL;
}

export type AuthActions =
  | GetUserTokens
  | GetUserTokensSuccess
  | GetUserTokensFail;
