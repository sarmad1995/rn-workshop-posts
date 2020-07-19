import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  ActivityIndicator,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";
import axios from "axios";
import ListTile from "./ListTile";

const PostList = () => {
  const [state, setState] = useState({ query: "", loading: true });
  const list = useRef([]);

  useEffect(() => {
    // My component did mount for the first time.
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      list.current = response.data;
      setState({ ...state, loading: false });
    });
  }, []);

  const handleChange = useCallback(
    (query) => {
      setState({ ...state, query });
    },
    [state]
  );

  const listToBeRendered = useMemo(() => {
    return state.query
      ? list.current.filter((post) => post.title.includes(state.query))
      : list.current;
  }, [state]);

  const renderItem = useCallback(
    ({ item }) => {
      return <ListTile key={item.id} title={item.title} body={item.body} />;
    },
    [state]
  );

  if (state.loading === true) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  const handleKeyExtractor = (_, i) => i.toString();
  return (
    <View style={styles.fill}>
      <TextInput
        onChangeText={handleChange}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Search Input..."
        style={styles.textInput}
      />
      <FlatList
        keyExtractor={handleKeyExtractor}
        data={listToBeRendered}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
  textInput: {
    marginTop: 40,
    marginBottom: 30,
    width: "90%",
    backgroundColor: "white",
    height: 50,
    alignSelf: "center",
    borderRadius: 5,
    paddingHorizontal: 20,
  },
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
