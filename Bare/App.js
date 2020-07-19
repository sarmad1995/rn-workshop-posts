import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import Config from "react-native-config";
import { Alert } from "react-native";
import { StyleSheet, Text, View } from "react-native";

console.log(process.env);
export default function App() {
  useEffect(() => {
    Alert.alert(Config.APP_NAME);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
