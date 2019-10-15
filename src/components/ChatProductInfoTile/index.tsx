import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import Icon, { IconType } from "../Icon";
import { Actions } from "react-native-router-flux";

interface Props {
  heading: string;
  imageUri: string;
  deliveryLocation: string;
  dueDate: string;
  onPress: () => void;
}

const ChatProductInfoTile: React.FunctionComponent<Props> = ({
  heading,
  imageUri,
  deliveryLocation,
  onPress,
  dueDate
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={Actions.pop}>
      <Icon
        style={styles.arrowIcon}
        color="#000"
        type={IconType.ION_ICONS}
        name="ios-arrow-back"
      />
    </TouchableOpacity>
    <Image style={styles.productImage} source={{ uri: imageUri }} />
    <View style={styles.productDetail}>
      <Text style={styles.productName}>{heading}</Text>
      <Text style={styles.productInfo}>{deliveryLocation}</Text>
      <Text style={styles.productInfo}>{dueDate}</Text>
    </View>
    <TouchableOpacity onPress={onPress}>
      <Icon
        style={styles.infoIcon}
        color="#000"
        type={IconType.ENTYPO}
        name="info-with-circle"
      />
    </TouchableOpacity>
  </View>
);

export default ChatProductInfoTile;
