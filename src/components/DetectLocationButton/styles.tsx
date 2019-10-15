import { StyleSheet } from "react-native";
import COLORS from "../../theme/colors";

export default StyleSheet.create({
  detectLocationCTA: {
    alignSelf: "stretch",
    backgroundColor: COLORS.BUTTON.BG_PRIMARY,
    marginBottom: 16
  },
  disabledDetectLocationCTA: {
    opacity: 0.5
  },
  buttonStyleCTA: {
    backgroundColor: COLORS.SEA_BLUE
  }
});
