import * as React from "react";
import {
  Image,
  ImageSourcePropType,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { Actions } from "react-native-router-flux";
import { SCENES } from "../../routes";
import styles from "./styles";

function getImageUri(countryCode: string): ImageSourcePropType {
  return {
    uri: `https://res.cloudinary.com/airbuk/image/upload/country-flags/${countryCode}.png`,
    width: 90,
    height: 55
  };
}

const onPress = () => {
  Actions.push(SCENES.BROWSE_SCREEN);
};

export interface Country {
  name: string;
  code: string;
}

interface Props extends Country {}

const CountryCard: React.FunctionComponent<Props> = props => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.flagView} onPress={onPress}>
      <Image
        source={getImageUri(props.code.toLowerCase())}
        style={styles.image}
      />
    </TouchableOpacity>
    <Text style={styles.text}>{props.name}</Text>
  </View>
);

export default CountryCard;
