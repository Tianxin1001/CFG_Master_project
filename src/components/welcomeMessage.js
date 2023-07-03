import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function WelcomeMessage() {
	const username = useSelector((state) => state.username);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch({ type: "changeUsername", payload: null });
	};

	if (!username) {
		return null; // Return null when username is null
	}

	return (
		<View style={styles.container}>
			<Text style={styles.welcomeText}>Welcome, {username}!</Text>
			<TouchableOpacity onPress={handleLogout}>
				<Text style={styles.logoutText}>Logout</Text>
			</TouchableOpacity>
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
	logoutText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "blue",
		textDecorationLine: "underline",
	},
});
