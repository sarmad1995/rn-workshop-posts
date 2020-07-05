import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListTile = (props) => {
  return (
    <View style={styles.listTileContainer}>
      <Text>{props.title}</Text>
      <Text>{props.body}</Text>
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

export default ListTile;
