import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";
import colors from "../../theme/colors";

interface Props {
  heading: string;
  timeElasped: string;
  imageUri: string;
  deliveryLocation?: string;
  dueDate?: string;
  buyingLocation?: string;
  price?: string;
  quantity?: string;
  reward: string;
  color?: string;
  buttonText?: string;
  status: "deposited" | "purchased" | "open";
  onPress: () => void;
  code?: string;
}

const ProductsTile: React.FunctionComponent<Props> = ({
  heading,
  timeElasped,
  imageUri,
  deliveryLocation,
  dueDate,
  buyingLocation,
  price,
  quantity,
  reward,
  color,
  buttonText,
  onPress,
  status,
  code
}) => {
  const statusBanner = () => {
    if (status === "deposited")
      return (
        <Text style={{ ...styles.offerStatusText, color: colors.PARROT_GREEN }}>
          Deopsit Made
        </Text>
      );
    else if (status === "purchased")
      return (
        <Text
          style={{ ...styles.offerStatusText, color: colors.BUTTON.PRIMARY }}
        >
          Product Purchased
        </Text>
      );
    return <Text style={styles.offerStatusText}>Open for offers</Text>;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTextLeft}>{heading}</Text>
        <View>
          {statusBanner()}
          <Text style={styles.offerTimeText}>{timeElasped}</Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.imageView}>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </View>
        <View style={styles.boxView}>
          {status === "purchased" ? (
            <View style={{ ...styles.box, backgroundColor: "#f0f8fc" }}>
              <View>
                <Text style={styles.codeHeading}>
                  Delivery Confirmation Code
                </Text>
                <Text style={styles.code}>{code}</Text>
              </View>
            </View>
          ) : (
            <View style={styles.box}>
              <View style={styles.boxLeftView}>
                <Text style={styles.transportText}>
                  Buy from
                  <Text style={styles.transportText}>
                    <Text style={styles.buyingLocationText}>
                      {buyingLocation}
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.transportText}>
                  Deliver in
                  <Text style={styles.transportText}>
                    <Text style={styles.deliveryLocationText}>
                      {deliveryLocation}
                    </Text>
                  </Text>
                </Text>
              </View>
              <View style={styles.boxRightView}>
                <View style={styles.buttonView}>
                  <Text style={styles.buttonViewText}>Price ${price}</Text>
                </View>
                <View style={styles.buttonView}>
                  <Text style={styles.buttonViewText}>Qty {quantity}</Text>
                </View>
                <View style={styles.buttonView}>
                  <Text style={styles.dueDateText}>
                    Before <Text style={styles.dueDateText_B}>{dueDate}</Text>
                  </Text>
                </View>
              </View>
            </View>
          )}
          <View style={styles.bottom}>
            <Text style={styles.delivaryAward}>
              Delivery Reward <Text style={styles.currency}>${reward}</Text>
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              status !== "purchased" ? (color ? color : "#15baf8") : "#aaa"
          }
        ]}
        onPress={onPress}
      >
        {status === "purchased" ? (
          <Text style={{ ...styles.buttonText, color: "#444" }}>Confirmed</Text>
        ) : (
          <Text style={styles.buttonText}>{buttonText}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProductsTile;
