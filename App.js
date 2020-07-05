import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View>
      <View style={styles.listTileContainer}>
        <Text>Title</Text>
        <Text>Body</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listTileContainer: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
export default App;
