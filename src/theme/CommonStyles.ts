import { Platform, ViewStyle, TextStyle, ImageStyle } from "react-native";

type CommonStyle = ViewStyle | TextStyle | ImageStyle;

export const center: CommonStyle = {
  alignItems: "center",
  justifyContent: "center"
};

export const shadow: CommonStyle = {
  shadowColor: "#ccc",
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity: 1.0
};

export const lightShadow: CommonStyle = {
  shadowColor: "#000",
  shadowRadius: Platform.OS === "ios" ? 2 : 10,
  shadowOpacity: Platform.OS === "ios" ? 0.1 : 1,
  elevation: Platform.OS === "ios" ? 1 : 10
};

export const tile: CommonStyle = {
  backgroundColor: "#f5f5f5",
  padding: 5,
  borderRadius: 10,
  ...center,
  ...shadow,
  shadowColor: "#999999"
};

export const heading: CommonStyle = {
  color: "#484848",
  fontSize: 10,
  fontWeight: "bold"
};

export const heading_large: CommonStyle = {
  fontSize: 13,
  fontWeight: "bold",
  marginVertical: 8
};

export const borderView: CommonStyle = {
  paddingTop: 28,
  paddingBottom: 20,
  borderBottomWidth: 0.5,
  borderBottomColor: "rgba( 112,112,112, 0.2)"
};

export const border: CommonStyle = {
  borderBottomWidth: 0.5,
  borderBottomColor: "rgba( 112,112,112, 0.2)"
};

export const borderTop: CommonStyle = {
  borderTopWidth: 0.5,
  borderTopColor: "rgba( 112,112,112, 0.2)"
};

export const text: TextStyle = {
  fontSize: 30,
  textAlign: "center",
  color: "#484848",
  fontWeight: "500"
};

export const defaultProfileImage = "https://i.ibb.co/CJsfFFY/max-rehkopf.png";

export const defaultOrderImage =
  "https://images-na.ssl-images-amazon.com/images/I/81b7oHjvbbL._SX569_.jpg";

export const imageArray = [
  "https://images-na.ssl-images-amazon.com/images/I/81b7oHjvbbL._SX569_.jpg",
  "https://i.ibb.co/CJsfFFY/max-rehkopf.png"
];
