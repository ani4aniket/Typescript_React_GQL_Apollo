import React, { useState, Fragment } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import Icon, { IconType } from "../Icon";
import ProductDescription from "../ProductDescription";
import OrderProfileTile from "../OrderProfileTile";
import { imageArray } from "../../theme/CommonStyles";

interface Props {
  heading: string;
  imageUri: string;
  price: string;
}

interface State {
  isOpen: boolean;
}

const ChatProductDetailTile: React.FunctionComponent<Props> = ({
  heading,
  imageUri,
  price
}) => {
  const [state, updateState] = useState<State>({
    isOpen: false
  });

  const setState = (newState: Partial<State>) =>
    updateState(prevState => ({ ...prevState, ...newState }));

  const { isOpen } = state;

  const open = () => setState({ isOpen: true });

  const close = () => setState({ isOpen: false });

  return (
    <View style={styles.container}>
      {isOpen ? (
        <Fragment>
          <OrderProfileTile
            border
            brandName="Brand Name"
            productName="Product Name"
            price="79"
            images={imageArray}
            currency="$"
          />
          <ProductDescription />
          <TouchableOpacity
            style={{ alignSelf: "flex-end", padding: 4, margin: 4 }}
            onPress={close}
          >
            <Icon
              style={styles.infoIcon}
              color="#9b9b9b"
              type={IconType.ION_ICONS}
              name="ios-arrow-up"
            />
          </TouchableOpacity>
        </Fragment>
      ) : (
        <View style={styles.tile}>
          <Image style={styles.productImage} source={{ uri: imageUri }} />
          <View style={styles.productDetail}>
            <Text style={styles.productName}>{heading}</Text>
            <Text style={styles.productInfo}>Open for offers</Text>
          </View>
          <View style={styles.productPriceDetail}>
            <Text style={styles.productPrice}>${price}</Text>
            <TouchableOpacity onPress={open}>
              <Icon
                style={styles.infoIcon}
                color="#9b9b9b"
                type={IconType.ION_ICONS}
                name="ios-arrow-down"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default ChatProductDetailTile;
