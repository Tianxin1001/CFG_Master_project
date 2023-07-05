import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function WelcomeMessage({ user }) {
  if (!user || !user.name) {
    return <Text style={styles.welcomeText}>Welcome!</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {user.name}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  welcomeText: {
    fontFamily: "Georgia",
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});
