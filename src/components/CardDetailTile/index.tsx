import * as React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";

interface Props {
  cardView: boolean;
}

const CardDetailTile: React.FunctionComponent<Props> = ({ cardView }) => (
  <View style={styles.container}>
    {cardView ? (
      <View>
        <Text style={styles.headingText}>Name on card</Text>
        <TextInput style={styles.inputText} placeholder="e.g. John Smith" />
        <Text style={styles.headingText}>Card number</Text>
        <View style={styles.cardNoView}>
          <TextInput
            style={styles.cardNoText}
            placeholder="0000"
            maxLength={4}
          />
          <TextInput
            style={styles.cardNoText}
            placeholder="0000"
            maxLength={4}
          />
          <TextInput
            style={styles.cardNoText}
            placeholder="0000"
            maxLength={4}
          />
          <TextInput
            style={styles.cardNoText}
            placeholder="0000"
            maxLength={4}
          />
        </View>
        <Text style={styles.headingText}>Card expiration date</Text>
        <View style={styles.cardExpiryView}>
          <TextInput
            style={styles.cardExpiryMonth}
            placeholder="MM"
            maxLength={2}
          />
          <TextInput
            style={styles.cardExpiryYear}
            placeholder="YY"
            maxLength={2}
          />
        </View>
        <Text style={styles.headingText}>CVC</Text>
        <TextInput style={styles.inputCvcText} placeholder="e.g. '000'" />
      </View>
    ) : (
      <View>
        <Text style={styles.headingText}>Enter your PayPal email address</Text>
        <TextInput
          style={styles.inputText}
          placeholder=" e.g. 'johnsmith@email.com'"
        />
      </View>
    )}
  </View>
);

export default CardDetailTile;
