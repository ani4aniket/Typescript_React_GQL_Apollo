import { StyleSheet } from "react-native";

export default StyleSheet.create({
  userlistView: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    alignItems: "center"
  },
  userImageView: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  userNameView: {
    fontSize: 18,
    marginLeft: 10,
    color: "#484848",
    fontWeight: "600"
  },
  userSeparationView: {
    width: "100%",
    height: 1,
    marginTop: 5,
    backgroundColor: "#ededed"
  },
  strip: {
    width: 150,
    marginVertical: 2,
    marginLeft: 16
  }
});
