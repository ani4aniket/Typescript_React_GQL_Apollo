import React, { Fragment } from "react";
import { View, Text } from "react-native";
import { SAMPLE_ORDER_DETAILS } from "../../utils/constants";
import styles from "./styles";

const ProductDescription: React.FunctionComponent = () => (
  <Fragment>
    <View style={styles.specifications}>
      <Text style={styles.heading}>Specifications</Text>
      <Text style={styles.subHeading}>
        Main Color :
        <Text style={styles.headingValue}>
          {SAMPLE_ORDER_DETAILS.MAIN_COLOR}
        </Text>
      </Text>
      <Text style={styles.subHeading}>
        Series Name :
        <Text style={styles.headingValue}>
          {SAMPLE_ORDER_DETAILS.Series_Name}
        </Text>
      </Text>
      <Text style={styles.subHeading}>
        Manufacturer Material:
        <Text style={styles.headingValue}>
          {SAMPLE_ORDER_DETAILS.Manufacturer_Material}
        </Text>
      </Text>
      <Text style={styles.subHeading}>
        Best For :
        <Text style={styles.headingValue}>{SAMPLE_ORDER_DETAILS.Best_For}</Text>
      </Text>
      <Text style={styles.subHeading}>
        Group Package Size
        <Text style={styles.headingValue}>
          {SAMPLE_ORDER_DETAILS.Group_Package_Size}
        </Text>
      </Text>
      <Text style={styles.subHeading}>
        Weight :
        <Text style={styles.headingValue}>{SAMPLE_ORDER_DETAILS.Weight}</Text>
      </Text>
      <Text style={styles.subHeading}>
        Gtin :
        <Text style={styles.headingValue}>{SAMPLE_ORDER_DETAILS.Gtin}</Text>
      </Text>
      <Text style={styles.subHeading}>
        Warranty Information :
        <Text style={styles.headingValue}>
          {SAMPLE_ORDER_DETAILS.Warranty_Information}
        </Text>
      </Text>
    </View>
    <View style={styles.specifications}>
      <Text style={styles.heading}>Product Description</Text>
      <Text style={styles.headingValue}>
        {SAMPLE_ORDER_DETAILS.Product_Description}
      </Text>
    </View>
  </Fragment>
);

export default ProductDescription;
