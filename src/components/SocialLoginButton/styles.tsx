import { StyleSheet } from "react-native";
import { shadow } from "../../theme/CommonStyles";

export default StyleSheet.create({
  socialButtons: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  socialButtonsView: {
    ...shadow,
    elevation: 5,
    borderRadius: 25
  }
});
