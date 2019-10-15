import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import moment from "moment";

interface Props {
  type: "sender" | "receiver" | "bot";
  message: string;
  avatar?: string;
  time: number;
}

const Message: React.FunctionComponent<Props> = ({
  type = "bot",
  time,
  message,
  avatar
}) => {
  if (type !== "bot")
    return (
      <View
        style={[
          styles.chatView,
          [
            type === "receiver"
              ? { flexDirection: "row", alignSelf: "flex-start" }
              : { flexDirection: "row-reverse", alignSelf: "flex-end" }
          ]
        ]}
      >
        <Image style={styles.userProfileImage} source={{ uri: avatar }} />
        <View
          style={{
            ...styles.chatBodyView,
            backgroundColor: type === "receiver" ? "#ebebeb" : "#e9f8fd"
          }}
        >
          <Text style={styles.messageBody}>{message}</Text>
          <Text style={styles.messageTime}>
            {moment.unix(time / 1000).format("hh:mm A")}
          </Text>
        </View>
      </View>
    );
  return (
    <View style={styles.autoChatView}>
      <Text style={styles.autoChatText}>{message}</Text>
    </View>
  );
};

export default Message;
