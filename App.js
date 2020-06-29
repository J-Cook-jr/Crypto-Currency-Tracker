import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";

import Store from "./src/Store"
import Header from "./src/Components/Header";

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
        </View>
      </Provider>
    );
  }
}
