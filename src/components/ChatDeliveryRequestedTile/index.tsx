import * as React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Icon, { IconType } from "../IconComponent";
import { COLORS } from "../../theme";

interface Props {
  imageUri: string;
  userName: string;
  location: string;
  date: string;
  rewardRequested: string;
  total: string;
  others?: boolean;
  chat?: boolean;
  onPressAccept?: () => void;
  onPressDecline?: () => void;
}

const ChatDeliveryRequestedTile: React.FunctionComponent<Props> = ({
  imageUri,
  userName,
  location,
  date,
  rewardRequested,
  total,
  others,
  chat,
  onPressAccept,
  onPressDecline
}) => (
  <View style={styles.container}>
    <View style={styles.profileView}>
      <Image style={styles.profileImage} source={{ uri: imageUri }} />
      <View style={styles.productDetail}>
        <Text style={styles.productName}>{userName}</Text>
        <Text style={styles.productInfo}>{location}</Text>
        <Text style={styles.productInfo}>{date}</Text>
      </View>
    </View>
    <View style={styles.rewardView}>
      <View style={styles.columnView}>
        <Text style={styles.titleText}>Delivery Reward Requested</Text>
        <View style={styles.inputView}>
          <Text style={styles.inputText}>${rewardRequested}</Text>
        </View>
      </View>
      <View style={styles.columnView}>
        <Text style={styles.titleText}>Estimated total</Text>
        <View style={{ ...styles.inputView, backgroundColor: "#484848" }}>
          <Text style={{ ...styles.inputText, color: "white" }}>${total}</Text>
        </View>
      </View>
    </View>
    {others ? (
      <View style={styles.offerView}>
        {chat ? (
          <Icon
            type={IconType.ANT_DESIGN}
            name="wechat"
            iconColor="white"
            foreground="white"
            background={COLORS.PARROT_GREEN}
          />
        ) : null}
        <Icon
          onPress={onPressAccept}
          value="Accept Offer"
          type={IconType.ENTYPO}
          name="wallet"
          iconColor="white"
          foreground="white"
          background={COLORS.PARROT_GREEN}
        />
        <Icon
          onPress={onPressDecline}
          value="Decline Offer"
          type={IconType.ANT_DESIGN}
          name="close"
          iconColor={COLORS.PARROT_GREEN}
          foreground={COLORS.PARROT_GREEN}
          background="white"
        />
      </View>
    ) : null}
  </View>
);

export default ChatDeliveryRequestedTile;
