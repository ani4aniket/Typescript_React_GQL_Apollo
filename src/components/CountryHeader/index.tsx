import * as React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import styles from "./styles";

function getImageUri(countryCode: string): ImageSourcePropType {
  return {
    uri: `https://res.cloudinary.com/airbuk/image/upload/country-flags/${countryCode}.png`,
    width: 45,
    height: 28
  };
}

interface Props {
  name: string;
  code: string;
  visible?: boolean;
}

const CountryHeader: React.FunctionComponent<Props> = ({
  name,
  code,
  visible
}) =>
  visible ? (
    <View>
      <Text style={styles.heading}>SHOWING PRODUCTS FROM</Text>
      <View style={styles.body}>
        <Image
          source={getImageUri(code.toLocaleLowerCase())}
          style={styles.image}
        />
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  ) : null;

export default CountryHeader;
