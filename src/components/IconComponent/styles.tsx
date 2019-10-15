import { StyleSheet } from "react-native";
import { center, shadow } from "../../theme/CommonStyles";
import colors from "../../theme/colors";

export default StyleSheet.create({
  container: {
    ...center
  },
  iconView: {
    backgroundColor: "white",
    height: 50,
    width: 50,
    borderWidth: 2,
    ...center,
    borderColor: colors.PARROT_GREEN,
    borderRadius: 30,
    ...shadow,
    shadowColor: "#777",
    elevation: 2
  },
  icon: {
    fontSize: 32,
    color: colors.PARROT_GREEN,
    fontWeight: "bold"
  },
  text: {
    textAlign: "center",
    color: "#484848",
    fontWeight: "bold",
    fontSize: 10,
    paddingTop: 12
  }
});
