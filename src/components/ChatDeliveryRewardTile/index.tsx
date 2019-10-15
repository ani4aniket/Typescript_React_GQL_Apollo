import * as React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

interface Props {
  reward: string;
  quantity: string;
  deliveryDate: string;
  total: string;
  deliveryLocation: string;
  airport: string;
}

const ChatDeliveryRewardTile: React.FunctionComponent<Props> = ({
  reward,
  quantity,
  deliveryDate,
  total,
  deliveryLocation,
  airport
}) => (
  <View style={styles.container}>
    <View style={styles.rewardView}>
      <View style={styles.columnView}>
        <Text style={styles.titleText}>Delivery Reward Offered</Text>
        <Text style={styles.inputView}>${reward}</Text>
      </View>
      <View style={styles.columnView}>
        <Text style={styles.titleText}>Quantity</Text>
        <Text style={styles.inputView}>{quantity}</Text>
      </View>
    </View>
    <View style={styles.rewardView}>
      <View style={styles.columnView}>
        <Text style={styles.titleText}>Delivery Date</Text>
        <Text
          style={[
            styles.inputView,
            { paddingVertical: 17.25, padding: 0, fontSize: 16 }
          ]}
        >
          {deliveryDate}
        </Text>
      </View>
      <View style={styles.columnView}>
        <Text style={styles.titleText}>Estimated total</Text>
        <Text
          style={[
            styles.inputView,
            { color: "#fff", backgroundColor: "#484848" }
          ]}
        >
          ${total}
        </Text>
      </View>
    </View>
    <View style={styles.rewardView}>
      <View style={styles.columnView}>
        <Text style={styles.titleText}>Delivery Location</Text>
        <Text style={styles.textView}>{deliveryLocation}</Text>
      </View>
      <View style={styles.columnView}>
        <Text style={styles.titleText}>Nearest Internation Airport</Text>
        <Text style={styles.textView}>{airport}</Text>
      </View>
    </View>
  </View>
);

export default ChatDeliveryRewardTile;
