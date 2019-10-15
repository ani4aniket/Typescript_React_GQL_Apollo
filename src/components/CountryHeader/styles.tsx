import { StyleSheet } from "react-native";
import { heading, border } from "../../theme/CommonStyles";

export default StyleSheet.create({
  container: {},
  heading: { ...heading },
  body: { flexDirection: "row", padding: 16, ...border },
  image: { borderRadius: 5 },
  text: { padding: 5, paddingLeft: 10, color: "#9b9b9b" }
});
