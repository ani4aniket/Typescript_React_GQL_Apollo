import * as React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import styles from "./styles";

interface Props {
  imageUri: string;
  cardNo: string;
  expiry: string;
}

interface PaymentState {
  selected: boolean;
}

class PaymentDetailTile extends React.PureComponent<Props, PaymentState> {
  state = {
    selected: false
  };

  handleSelection = () => {
    this.setState(prevState => ({ selected: !prevState.selected }));
  };

  render() {
    const { selected } = this.state;
    const { imageUri, cardNo, expiry } = this.props;
    return !selected ? (
      <TouchableOpacity onPress={this.handleSelection} style={styles.container}>
        <Text style={styles.cardNoView}>{cardNo}</Text>
        <View style={styles.rowView}>
          <Text style={styles.expiryText}>Expiry</Text>
          <Text style={styles.expiryTextValue}>{expiry}</Text>
          <Image style={styles.cardImage} source={{ uri: imageUri }} />
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        onPress={this.handleSelection}
        style={[styles.container, { backgroundColor: "#ebebeb" }]}
      >
        <Text style={styles.cardNoView}>{cardNo}</Text>
        <View style={styles.rowView}>
          <Text style={styles.expiryText}>Expiry</Text>
          <Text style={styles.expiryTextValue}>{expiry}</Text>
          <Text style={styles.cardCvcText}>CVC</Text>
          <TextInput
            style={styles.cardNoText}
            placeholder="e.g. '0000'"
            maxLength={4}
          />
        </View>
        <Image
          style={[styles.cardImage, { alignSelf: "flex-end", marginRight: 20 }]}
          source={{ uri: imageUri }}
        />
      </TouchableOpacity>
    );
  }
}
export default PaymentDetailTile;
