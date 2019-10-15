import React from "react";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";

import SplashScreen from "react-native-splash-screen";
import apolloClient from "./src/apollo/client";
import store from "./src/reducers/createStore";

import Routes from "./src/routes";

/**
 * The main App component with ApolloProvider
 * and Redux Provider wrappers over Routes,
 * which consists of the routing stack of the app.
 */
class App extends React.PureComponent {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ApolloProvider>
    );
  }
}
export default App;
