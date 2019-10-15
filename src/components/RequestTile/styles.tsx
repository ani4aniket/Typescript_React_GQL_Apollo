import { StyleSheet } from "react-native";
import {
  center,
  border,
  borderTop,
  heading_large
} from "../../theme/CommonStyles";

export default StyleSheet.create({
  container: {
    ...border,
    ...borderTop,
    paddingVertical: 12,
    backgroundColor: "white"
  },
  requestTime: {
    flex: 1,
    alignSelf: "flex-end",
    fontSize: 13,
    color: "#484848",
    fontStyle: "italic",
    padding: 8
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 45
  },
  body: {
    ...center,
    padding: 4,
    flexDirection: "row"
  },
  description: {
    flex: 1,
    padding: 12
  },
  name: {
    fontSize: 18,
    color: "#484848"
  },
  heading: {
    ...heading_large
  }
});
