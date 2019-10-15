import * as React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

import { HEADER } from "../../../utils/constants";
import { SCENES } from "../../../routes";
import Header from "../../../components/Headers/Header";
import OfferDetailsTile from "../../../components/OfferDetailsTile";
import PaymentDetailTile from "../../../components/PaymentDetailTile";

import styles from "./styles";

interface Props {}

const usertList = [
  {
    cardNo: "XXXX XXXX XXXX 1243",
    imageUrl: "https://i.ibb.co/tpTTcCh/Visa.jpg",
    expiry: "02/24"
  },
  {
    cardNo: "XXXX XXXX XXXX 1243",
    imageUrl: "https://i.ibb.co/tpTTcCh/Visa.jpg",
    expiry: "02/24"
  },
  {
    cardNo: "XXXX XXXX XXXX 1243",
    imageUrl: "https://i.ibb.co/tpTTcCh/Visa.jpg",
    expiry: "02/24"
  },
  {
    cardNo: "XXXX XXXX XXXX 1243",
    imageUrl: "https://i.ibb.co/tpTTcCh/Visa.jpg",
    expiry: "02/24"
  }
];

const OfferDetails: React.FunctionComponent<Props> = () => (
  <View style={styles.container}>
    <Header heading={HEADER.OFFER_DETAILS} />
    <ScrollView style={styles.scrollContainer}>
      <Text style={styles.reviewText}>REVIEW YOUR ORDER</Text>
      <OfferDetailsTile
        imageUri="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
        userName="Sachin"
        location="New York,USA"
        date="21 Nov,2018"
        productPrice="99"
        rewardFees="22.5"
        total="121.5"
      />
      <View style={styles.paymentMethodView}>
        <Text style={styles.selectPaymentText}>SELECT PAYMENT METHOD</Text>
        <Text
          onPress={() => Actions.push(SCENES.INVOICE)}
          style={styles.addPaymentText}
        >
          ADD NEW
        </Text>
      </View>
      {usertList.map(cardData => {
        return (
          <PaymentDetailTile
            cardNo={cardData.cardNo}
            imageUri={cardData.imageUrl}
            expiry={cardData.expiry}
          />
        );
      })}
    </ScrollView>
    <View style={styles.buttonMakeDepositView}>
      <TouchableOpacity style={styles.buttonGreyBackground}>
        <Text style={styles.buttonText}>Make Deposit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonGreenBackground}>
        <Text style={styles.buttonText}>Make Deposit</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default OfferDetails;
