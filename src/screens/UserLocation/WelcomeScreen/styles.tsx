import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 32
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 28,
    color: "#484848",
    marginBottom: 32
  },
  paragraph: {
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 24,
    color: "#707070",
    marginBottom: 32
  },
  errorMessage: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 21,
    color: "#ff0000"
  },
  manualLocationCTA: {
    marginBottom: 16
  },
  titleStyle: {
    color: colors.SEA_BLUE
  }
});
