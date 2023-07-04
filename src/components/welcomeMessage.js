import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function WelcomeMessage() {
	const name = useSelector((state) => state.name);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch({ type: "changeNickname", payload: null });
	};

	if (!name) {
		return null; // Return null when name is null
	}

	return (
		<View style={styles.container}>
			<Text style={styles.welcomeText}>Welcome, {name}!</Text>
			{/* <TouchableOpacity onPress={handleLogout}>
				<Text style={styles.logoutText}>Logout</Text>
			</TouchableOpacity> */}
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
