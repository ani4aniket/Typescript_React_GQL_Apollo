import { StyleSheet } from "react-native";
import { borderView, heading } from "../../theme/CommonStyles";

export default StyleSheet.create({
  specifications: {
    ...borderView,
    paddingTop: 16
  },
  heading: { fontSize: 10, fontWeight: "bold", paddingBottom: 16 },
  subHeading: {
    ...heading,
    fontSize: 12
  },
  headingValue: {
    ...heading,
    fontWeight: "normal",
    fontSize: 12
  }
});
