import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function WelcomeMessage() {
  const user = useSelector((state) => state.user);

  if (!user || !user.name) {
    return null; // Return null when user or user.name is null
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
