import { StyleSheet } from "react-native";
import metrics from "../../utils/metrics";

export default StyleSheet.create({
  chatView: {
    marginTop: 28,
    width: metrics.WIDTH - 56
  },
  chatBodyView: {
    borderRadius: 10,
    padding: 8
  },
  messageBody: {
    fontSize: 12,
    color: "#9b9b9b"
  },
  messageTime: {
    fontSize: 8,
    color: "#484848",
    padding: 4,
    alignSelf: "flex-end"
  },
  userProfileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 8
  },
  autoChatView: {
    backgroundColor: "#fff2b1",
    marginTop: 28
  },
  autoChatText: {
    alignSelf: "center",
    fontSize: 12,
    padding: 8,
    width: "60%",
    color: "#484848",
    textAlign: "center"
  }
});
