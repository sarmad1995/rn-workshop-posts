import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListTile = (props) => {
  return (
    <View style={styles.listTileContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.body}>{props.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listTileContainer: {
    backgroundColor: "white",
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  body: {
    color: "grey",
    fontSize: 12,
  },
});

export default ListTile;
