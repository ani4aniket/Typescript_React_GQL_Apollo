import { StyleSheet } from "react-native";
import { heading } from "../../theme/CommonStyles";

export default StyleSheet.create({
  categoryText: {
    ...heading,
    fontSize: 12,
    flex: 1
  },
  nameView: {
    paddingVertical: 12,
    flexDirection: "row"
  },
  icon: {
    fontSize: 16,
    color: "gray"
  }
});
