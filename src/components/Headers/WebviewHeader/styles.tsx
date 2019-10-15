import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "../../../utils";
import { center } from "../../../theme/CommonStyles";

export default StyleSheet.create({
  container: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    flexDirection: "row",
    height: getStatusBarHeight() + 40,
    width: "100%",
    zIndex: 2
  },
  back: {
    width: "10%",
    ...center
  },
  icon: {
    color: "black",
    fontSize: 16,
    marginTop: getStatusBarHeight() / 2
  },
  text: {
    width: "82.5%",
    textAlign: "center",
    marginTop: getStatusBarHeight(),
    fontSize: 16,
    fontWeight: "bold",
    color: "black"
  }
});
