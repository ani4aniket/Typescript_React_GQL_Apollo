import { StyleSheet } from "react-native";
import { shadow } from "../../../theme/CommonStyles";
import METRICS from "../../../utils/metrics";
import { COLORS } from "../../../theme";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    alignSelf: "center",
    width: METRICS.WIDTH - 25,
    flex: 1
  },
  profileImageView: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#707070",
    alignSelf: "center"
  },
  inputText: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    color: "#484848",
    backgroundColor: "#f5f5f5",
    borderRadius: 10
  },
  logoutText: {
    color: "#f52629",
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: COLORS.WHITE,
    elevation: 5,
    ...shadow
  }
});
