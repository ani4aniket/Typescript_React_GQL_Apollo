import * as React from "react";
import {
  View,
  Image,
  ImageBackground,
  Text,
  ImageURISource
} from "react-native";

import Swiper from "react-native-swiper";
import styles from "./styles";

interface Props {
  images: Array<string>;
  brandName: string;
  productName: string;
  price: string;
  border?: boolean;
  currency: string;
}

interface State {
  index: Number;
}

class OrderProfileTile extends React.PureComponent<Props, State> {
  state = {
    index: 0
  };

  _updateIndex = (index: number) => {
    this.setState({ index });
  };

  render() {
    const {
      images,
      brandName,
      productName,
      price,
      border,
      currency
    } = this.props;
    const { index } = this.state;
    return (
      <View
        style={[styles.container, border ? null : { borderBottomWidth: 0 }]}
      >
        <Swiper
          style={styles.wrapper}
          dotStyle={styles.dotMargin}
          activeDotStyle={styles.dotMargin}
          onIndexChanged={this._updateIndex}
        >
          {images.map((element, index) => {
            return (
              <View key={index}>
                <View>
                  <Image style={styles.image} source={{ uri: element }} />
                </View>
                <View>
                  <Image
                    onLoadEnd={() => this.setState({ index })}
                    style={styles.image}
                    source={{ uri: element }}
                  />
                </View>
              </View>
            );
          })}
        </Swiper>
        <ImageBackground
          blurRadius={30}
          style={styles.blurredImage}
          source={{ uri: images[index] }}
        >
          <View style={styles.detailView}>
            <View>
              <Text style={styles.brand}>{brandName}</Text>
              <Text style={styles.product}>{productName}</Text>
            </View>
            <Text style={styles.currency}>
              {currency}
              {price}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default OrderProfileTile;
