import { StyleSheet } from "react-native";
import { shadow } from "../../theme/CommonStyles";
import { COLORS } from "../../theme";

export default StyleSheet.create({
  container: {
    ...shadow,
    paddingTop: 10,
    width: 80,
    flex: 1,
    paddingBottom: 10,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.WHITE
  },
  tabText: {
    fontSize: 10,
    fontWeight: "bold"
  }
});
