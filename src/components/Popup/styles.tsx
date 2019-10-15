import { StyleSheet, TextStyle } from "react-native";
import { center, shadow, borderTop } from "../../theme/CommonStyles";

const text: TextStyle = {
  color: "#484848",
  fontSize: 14,
  ...borderTop
};

const options: TextStyle = {
  ...text,
  alignSelf: "flex-start",
  padding: 16,
  paddingVertical: 12
};

export default StyleSheet.create({
  container: {
    ...center,
    backgroundColor: "rgba(0,0,0,0.3)",
    height: "100%"
  },
  modalView: {
    ...shadow,
    shadowColor: "#777",
    ...center,
    backgroundColor: "white",
    borderRadius: 20
  },
  text: {
    ...text
  },
  options: {
    ...options,
    width: 246
  },
  descriptionOptions: {
    ...options,
    ...center,
    width: 190,
    flexDirection: "row"
  },
  heading: {
    ...text,
    fontWeight: "bold"
  },
  border: {
    ...borderTop,
    ...center
  },
  key: {
    flex: 1,
    ...text,
    textAlign: "center"
  },
  value: {
    flex: 1,
    ...text,
    color: "#9b9b9b"
  }
});
