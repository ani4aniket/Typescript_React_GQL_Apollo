import * as React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView
} from "react-native";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { WebView } from "react-native-webview";
import { OnShouldStartLoadWithRequest } from "react-native-webview/lib/WebViewTypes";
import { Actions } from "react-native-router-flux";
import DeviceInfo from "react-native-device-info";
import uuidv4 from "uuid/v4";
import querystring from "query-string";

import SocialLoginButton from "../../../components/SocialLoginButton";
import config from "../../../config";
import { fetchUserTokensByCode } from "../../../reducers/authReducer/authActions";
import { GetUserTokensResponseData } from "../../../reducers/authReducer/authInterface";

import styles from "./styles";
import { StoreInterface } from "../../../reducers";
import colors from "../../../theme/colors";
import { SCENES } from "../../../routes";
import { NETWORK_CALL_STATUS } from "../../../utils";

import Loader from "../../../components/Loader";
import WebviewHeader from "../../../components/Headers/WebviewHeader";

const airbukBG = require("../../../../assets/images/airbuk_bg.jpg");
const airbukLogo = require("../../../../assets/images/airbuk_logo.png");
const facebook = require("../../../../assets/images/facebook.jpeg");
const google = require("../../../../assets/images/google.png");
const instagram = require("../../../../assets/images/instagram.jpeg");
const twitter = require("../../../../assets/images/twitter.jpeg");

interface OwnProps {
  nextScreen: SCENES;
}

interface StateToProps {
  userTokensNetworkStatus: NETWORK_CALL_STATUS;
  userTokensData: GetUserTokensResponseData | null;
}

interface DispatchToProps {
  fetchUserTokensByCode: typeof fetchUserTokensByCode;
}

type Props = OwnProps & StateToProps & DispatchToProps;

interface State {
  nativeLogin: boolean;
  urlToLoad: string;
  loading: boolean;
}

class LoginHome extends React.PureComponent<Props, State> {
  state: State = {
    nativeLogin: true,
    urlToLoad: "",
    loading: true
  };

  handleTextClick = () => {
    // TODO: Open the webview and provide a way
    //       to come back to the native login screen
  };

  navigateToPreviousScreen = () => {
    Actions.pop();
  };

  startLoginProcess = (kcIdpHint: string) => {
    const url = this.getLoginURL(kcIdpHint);
    this.setState(prevState => ({
      nativeLogin: !prevState.nativeLogin,
      urlToLoad: url
    }));
  };

  onShouldStartLoadWithRequest: OnShouldStartLoadWithRequest = webViewState => {
    if (webViewState.url.startsWith(config.keycloak.redirectUri)) {
      const urlToParse = webViewState.url.replace("?", "&");
      const parsed = querystring.parse(urlToParse);

      if (parsed.code) {
        this.props.fetchUserTokensByCode(parsed.code as string);
      } else {
        // TODO: Show some error
      }

      return false;
    }
    return true;
  };

  getLoginURL = (kcIdpHint: string) => {
    const responseType = "code";
    const state = uuidv4();
    const clientId = "airbuk";
    return `https://keycloak.airbuk.com/auth/realms/master/protocol/openid-connect/auth?${querystring.stringify(
      {
        kc_idp_hint: kcIdpHint,
        redirect_uri: config.keycloak.redirectUri,
        client_id: clientId,
        response_type: responseType,
        state
      }
    )}`;
  };

  enableNativeLogin = () =>
    this.setState({ nativeLogin: true, loading: false });

  componentDidUpdate(prevProps: Props) {
    if (
      this.props.userTokensData !== prevProps.userTokensData &&
      this.props.userTokensNetworkStatus !==
        prevProps.userTokensNetworkStatus &&
      this.props.userTokensNetworkStatus === NETWORK_CALL_STATUS.SUCCESS &&
      this.props.userTokensData
    ) {
      // TODO: use Actions.reset() to take the user one screen
      //       forward on successful login and complete their
      //       action. Take the screen name through props.
      this.navigateToPreviousScreen();
    }
    // TODO: Handle login failure case with some error message on the view.
  }

  hideLoader = () => this.setState({ loading: false });

  showLoader = () => this.setState({ loading: true });

  render() {
    const { nativeLogin, urlToLoad, loading } = this.state;
    if (nativeLogin) {
      return (
        <ImageBackground style={styles.imageContainer} source={airbukBG}>
          <SafeAreaView style={styles.container}>
            <Image source={airbukLogo} style={styles.logoStyle} />
            <Text style={styles.textContainer}>
              Join Airbük and help us build the largest community of travelers
              in the world.
            </Text>
            <View style={styles.socialMediaView}>
              <Text style={styles.signinText}>
                Sign in using your favorite platform
              </Text>
              <View style={styles.socialMediaButtons}>
                <SocialLoginButton
                  socialMediaType="facebook"
                  imageSource={facebook}
                  onSelect={this.startLoginProcess}
                />
                <SocialLoginButton
                  socialMediaType="google"
                  imageSource={google}
                  onSelect={this.startLoginProcess}
                />
                <SocialLoginButton
                  socialMediaType="twitter"
                  imageSource={twitter}
                  onSelect={this.startLoginProcess}
                />
                <SocialLoginButton
                  socialMediaType="instagram"
                  imageSource={instagram}
                  onSelect={this.startLoginProcess}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={this.navigateToPreviousScreen}
              style={styles.exploringView}
            >
              <Text style={styles.exploringText}>Keep exploring Airbük</Text>
            </TouchableOpacity>
            <View style={styles.termTextContainer}>
              <View style={styles.termTextRowContainer}>
                <Text style={styles.termsText}>
                  By using Airbük, I agree to{" "}
                </Text>
                <Text
                  onPress={this.handleTextClick}
                  style={styles.termsRedirecText}
                >
                  Airbük&apos;s Terms of Use {"\n"}
                </Text>
              </View>
              <View style={styles.termTextRowContainer}>
                <Text style={styles.termsText}>and </Text>
                <Text
                  onPress={this.handleTextClick}
                  style={styles.termsRedirecText}
                >
                  Privacy Policy{" "}
                </Text>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      );
    }
    return (
      <View style={styles.webContainer}>
        <WebviewHeader onBackPress={this.enableNativeLogin} value="Login" />
        <WebView
          style={styles.webViewContainer}
          source={{ uri: urlToLoad }}
          onLoadEnd={this.hideLoader}
          onLoadStart={this.showLoader}
          userAgent={`${DeviceInfo.getUserAgent()} - Airbük`}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
        />
        {loading && <Loader color={colors.SEA_BLUE} size={50} show />}
      </View>
    );
  }
}

const mapStateToProps = (state: StoreInterface): StateToProps => ({
  userTokensNetworkStatus: state.authData.userTokensNetworkStatus,
  userTokensData: state.authData.userTokensResponse
});

const dispatchToProps = (dispatch: Dispatch): DispatchToProps =>
  bindActionCreators({ fetchUserTokensByCode }, dispatch);

export default connect(
  mapStateToProps,
  dispatchToProps
)(LoginHome);
