/* eslint-disable import/prefer-default-export */
import { GRANT_TYPES, GetUserTokens, GET_USER_TOKENS } from "./authInterface";
import config from "../../config";

export function fetchUserTokensByCode(
  authorizationCode: string
): GetUserTokens {
  return {
    type: GET_USER_TOKENS,
    requestBody: {
      clientId: config.keycloak.clientId,
      clientSecret: config.keycloak.clientSecret,
      grantType: GRANT_TYPES.AUTHORIZATION_CODE,
      code: authorizationCode,
      redirectUri: config.keycloak.redirectUri
    }
  };
}

export function fetchUserTokensByRefreshToken(
  refreshToken: string
): GetUserTokens {
  return {
    type: GET_USER_TOKENS,
    requestBody: {
      clientId: config.keycloak.clientId,
      clientSecret: config.keycloak.clientSecret,
      grantType: GRANT_TYPES.REFRESH_TOKEN,
      refreshToken
    }
  };
}
