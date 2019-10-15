import React, { Fragment } from "react";
import { View } from "react-native";
import styles from "./styles";
import LoadingStrip from "../../LoadingStrip";

interface Props {
  loading: boolean;
}

const UserTileLoader: React.FunctionComponent<Props> = ({ loading }) =>
  loading
    ? Array(10)
        .fill(null)
        .map((element, index) => (
          <Fragment key={index}>
            <View style={styles.userlistView}>
              <LoadingStrip style={styles.userImageView} />
              <View>
                <LoadingStrip style={styles.strip} />
                <LoadingStrip style={styles.strip} />
              </View>
            </View>
            <View style={styles.userSeparationView} />
          </Fragment>
        ))
    : null;

export default UserTileLoader;
