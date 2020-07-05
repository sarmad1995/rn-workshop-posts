import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ListTile from "./src/components/ListTile";

const App = () => {
  return (
    <View>
      <ListTile title="ABC" body="I am body" />
      <ListTile title="DEF" body="I am body" />
      <ListTile title="Random" body="I am body" />
      <ListTile title="1111" body="I am body" />
    </View>
  );
};

export default App;
