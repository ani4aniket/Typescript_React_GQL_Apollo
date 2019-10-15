import { StyleSheet } from "react-native";
import { shadow } from "../../../theme/CommonStyles";
import METRICS from "../../../utils/metrics";
import { COLORS } from "../../../theme";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
    flex: 1
  },
  safeContainer: {
    flex: 1
  },
  scroll: {
    width: METRICS.WIDTH,
    flexGrow: 1,
    paddingBottom: 20,
    alignSelf: "center",
    marginBottom: 10
  },
  userChatView: {
    flexDirection: "row",
    marginTop: 20
  },
  userProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  userMessageDate: {
    fontSize: 10,
    marginTop: 28,
    color: "#9b9b9b",
    alignSelf: "center"
  },
  messageSendView: {
    ...shadow,
    flexDirection: "row",
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    elevation: 5,
    backgroundColor: COLORS.WHITE
  },
  camerIconBackground: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#efefef",
    alignItems: "center",
    justifyContent: "center"
  },
  camerIcon: {
    fontSize: 22
  },
  threeDotIcon: {
    fontSize: 22
  },
  messageInputView: {
    flex: 1,
    margin: 10,
    height: 30,
    padding: 5,
    marginLeft: 5,
    backgroundColor: "#efefef",
    borderRadius: 15
  },
  depositedView: {
    backgroundColor: "#fff2b1",
    marginTop: 20,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 40,
    paddingLeft: 40
  },
  depositText: {
    fontSize: 12,
    marginBottom: 5,
    color: "#484848",
    textAlign: "center",
    fontWeight: "bold"
  },
  depositInfo: {
    marginTop: 5,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 12,
    color: "#484848"
  },
  senderChatView: {
    flexDirection: "row",
    marginTop: 20
  },
  senderChatBodyView: {
    alignItems: "center",
    backgroundColor: "#ebebeb",
    borderRadius: 20,
    flex: 1,
    marginLeft: 20,
    padding: 20
  },
  sharingView: {
    ...shadow,
    elevation: 5,
    top: METRICS.HEIGHT - 170,
    right: 1,
    position: "absolute",
    alignSelf: "flex-end",
    marginRight: 20,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10
  },
  sharingRowView: {
    flexDirection: "row",
    width: "100%",
    marginLeft: 10,
    padding: 10
  },
  sharingText: {
    marginLeft: 5,
    fontSize: 14
  },
  separationView: {
    height: 1,
    backgroundColor: "#cacaca"
  }
});
