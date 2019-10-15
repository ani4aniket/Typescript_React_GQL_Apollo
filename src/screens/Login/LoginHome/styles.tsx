import { StyleSheet } from "react-native";
import { COLORS } from "../../../theme";
import { shadow } from "../../../theme/CommonStyles";
import metrics from "../../../utils/metrics";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    flex: 1
  },
  textContainer: {
    fontSize: 20,
    textAlign: "center",
    color: COLORS.WHITE,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    marginLeft: 20,
    marginRight: 20
  },
  logoStyle: {
    height: 110,
    alignSelf: "center",
    width: 290,
    marginTop: 30
  },
  socialMediaView: {
    marginTop: 30,
    alignSelf: "center",
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  },
  exploringView: {
    backgroundColor: "#f69e18",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 30,
    paddingLeft: 30,
    ...shadow,
    elevation: 5,
    marginTop: 30,
    alignSelf: "center",
    borderRadius: 20
  },
  exploringText: {
    color: COLORS.WHITE,
    fontSize: 20
  },
  termsText: {
    fontSize: 16,
    color: COLORS.WHITE
  },
  signinText: {
    fontSize: 20,
    textAlign: "center",
    color: COLORS.WHITE,
    marginLeft: 10,
    marginRight: 10
  },
  socialMediaButtons: {
    flexDirection: "row",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "space-around"
  },
  termTextContainer: {
    bottom: 10,
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  termsRedirecText: {
    fontSize: 16,
    textAlign: "center",
    color: COLORS.WHITE,
    textDecorationLine: "underline"
  },
  termTextRowContainer: {
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    height: 25
  },
  webViewContainer: {
    flex: 1
  },
  webContainer: {
    width: metrics.WIDTH,
    height: metrics.HEIGHT
  }
});
