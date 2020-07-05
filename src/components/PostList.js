import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, ScrollView, StyleSheet } from "react-native";
import axios from "axios";
import ListTile from "./ListTile";

const PostList = () => {
  const [state, setState] = useState({ list: [], loading: true });

  useEffect(() => {
    // My component did mount for the first time.
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setState({ list: response.data, loading: false });
    });
  }, []);
  if (state.loading === true) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  console.log(`Length is ${state.list.length}`);
  return (
    <ScrollView style={styles.container}>
      {state.list.map((post) => {
        return <ListTile key={post.id} title={post.title} body={post.body} />;
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
export default PostList;
