import * as React from "react";
import { Text, View, ScrollView, Image } from "react-native";

import { HEADER } from "../../../utils/constants";

import Header from "../../../components/Headers/Header";

import styles from "./styles";

interface Props {}

const ProfileInformation: React.FunctionComponent<Props> = () => (
  <View style={styles.container}>
    <Header heading={HEADER.PROFILE} />
    <ScrollView>
      <Image
        source={{
          uri:
            "https://i.ibb.co/4gZhxWz/a9ae9e38-d9d1-4d31-8492-94d4a00a4061.png"
        }}
        style={styles.profileImageView}
      />
      <Text style={styles.inputText}>Piyush</Text>
      <Text style={styles.inputText}>Piyush@gmail.com</Text>
      <Text style={styles.logoutText}>Log out</Text>
    </ScrollView>
  </View>
);

export default ProfileInformation;
