import * as React from "react";
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  ImageURISource
} from "react-native";

import styles from "./styles";

interface Props {
  item: string;
  city: string;
  country: string;
  price: number;
  imageUri: ImageURISource;
  onPress: () => void;
}

const ProductProfileTile: React.FunctionComponent<Props> = ({
  item,
  city,
  country,
  price,
  imageUri,
  onPress
}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.imageView}>
      <Image source={{ uri: imageUri }} style={styles.image} />
    </View>
    <View style={styles.bottomView}>
      <View>
        <Text style={styles.heading}>{item}</Text>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.country}>{country}</Text>
      </View>
      <View style={styles.priceView}>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ProductProfileTile;
