import React, { useEffect, useState } from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "./styles";
import { SCENES } from "../../../routes";
import SearchBar from "../../../components/SearchBar";
import client from "../../../apollo/client";
import chatClient from "../../../apollo/chatClient";
import {
  GET_USER_CREDENTIALS,
  GET_CHAT_CHANNELS
} from "../../../apollo/queries";
import LocalStorage from "../../../utils/LocalStorage";
import { GET_CHAT_ACCESS } from "../../../apollo/mutations";
import UserTile from "../../../components/Tiles/UserTile";
import UserTileLoader from "../../../components/Tiles/UserTile/UserTileLoader";

interface State {
  channelsByUser: Array<{}>;
  loading: boolean;
}

const _LocalStorage = new LocalStorage("accessToken");

interface Props {}

const ChatHome: React.FunctionComponent<Props> = ({}) => {
  const [state, updateState] = useState<State | null>({
    channelsByUser: [],
    loading: true
  });
  const { channelsByUser, loading } = state;
  const setState = (newState: State) => updateState({ ...state, ...newState });

  useEffect(() => {
    client
      .query({
        query: GET_USER_CREDENTIALS,
        variables: { username: "pranjalnadhani" }
      })
      .then(resp => {
        chatClient
          .mutate({
            mutation: GET_CHAT_ACCESS,
            variables: {
              id: resp.data.allChatUserMappings.nodes[0].chatUuid,
              password: resp.data.allChatUserMappings.nodes[0].chatPassword
            }
          })
          .then(response => {
            _LocalStorage.saveData(
              response.data.loginWithPassword.tokens.accessToken
            );
          })
          .then(res => {
            chatClient
              .query({
                query: GET_CHAT_CHANNELS,
                variables: {
                  id: resp.data.allChatUserMappings.nodes[0].chatUuid
                }
              })
              .then(response => {
                setState({
                  channelsByUser: response.data.channelsByUser.filter(
                    elem => elem.id !== "GENERAL"
                  ),
                  loading: false
                });
              });
          });
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar placeholder="Search for a user" style={styles.search} />
      <ScrollView style={styles.scroll} keyboardShouldPersistTaps="handled">
        {channelsByUser.map(user => {
          const member = user.members
            .filter(elem => elem.id !== "fTeq9gAMooPRDQXJK")
            .pop();
          return (
            <UserTile
              key={user.id}
              onPress={() =>
                Actions[SCENES.BUYER_CHAT]({ id: user.id, memberId: member.id })
              }
              uri={member.avatar}
              value={member.name}
            />
          );
        })}
        <UserTileLoader loading={loading} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatHome;
