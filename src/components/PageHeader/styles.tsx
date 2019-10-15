import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { center } from "../../theme/CommonStyles";

const view: ViewStyle = {
  ...center,
  padding: 7,
  borderRadius: 45,
  width: 32,
  borderWidth: 0.5
};

const line: ViewStyle = {
  borderWidth: 0.5,
  flex: 1
};
const text: TextStyle = {
  fontWeight: "bold",
  color: "white"
};

const shadow: ViewStyle = {
  shadowOpacity: 0.8,
  shadowOffset: { height: 2, width: 2 },
  elevation: 1
};

export default StyleSheet.create({
  container: {
    ...center,
    flexDirection: "row",
    padding: 16
  },
  selectedView: {
    ...view,
    ...shadow
  },
  unselectedView: {
    ...view,
    backgroundColor: "white",
    ...shadow,
    shadowColor: "#0004"
  },
  selectedText: { ...text },
  unselectedText: { ...text, color: "#ddd" },
  selectedline: { ...line },
  unselectedline: { ...line, borderColor: "transparent" }
});
