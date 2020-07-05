import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import axios from "axios";
import ListTile from "./src/components/ListTile";

const App = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    // My component did mount for the first time.
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setValue(response.data);
    });
  }, []);

  console.log(`Length is ${value.length}`);
  return (
    <View style={styles.container}>
      {value.map((post) => {
        return <ListTile key={post.id} title={post.title} body={post.body} />;
      })}
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
