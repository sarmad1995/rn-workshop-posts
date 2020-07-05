import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ListTile from "./src/components/ListTile";

const App = () => {
  return (
    <View style={styles.container}>
      <ListTile title="ABC" body="I am body" />
      <ListTile title="DEF" body="I am body" />
      <ListTile title="Random" body="I am body" />
      <ListTile title="1111" body="I am body" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
});

export default App;
