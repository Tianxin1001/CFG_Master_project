import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ImageBackground,
	Image,
} from "react-native";

export default function WelcomePage({ navigation }) {
	const handleLoginSignUp = () => {
		navigation.navigate("Authorisation");
	};

	const handleContinueWithoutAccount = () => {
		navigation.navigate("WorldMap");
	};

	return (
		<ImageBackground
			source={require("../../assets/background.png")}
			style={styles.backgroundImage}
		>
			<View style={styles.container}>
				<View style={styles.logoContainer}>
				</View>
				<Text style={styles.message}>
					Your personalised news starts here....
				</Text>
				<TouchableOpacity style={styles.button} onPress={handleLoginSignUp}>
					<Text style={styles.buttonText}>Login / Sign Up</Text>
				</TouchableOpacity>
				<Text style={styles.orText}>or</Text>
				<TouchableOpacity
					style={styles.link}
					onPress={handleContinueWithoutAccount}
				>
					<Text style={styles.linkText}>Continue without an account</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
		color: "red",
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	message: {
		fontSize: 24,
		marginBottom: 20,
		textAlign: "center",
		color: "black",
		fontWeight: "bold",
	},
	button: {
		backgroundColor: "black",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		marginBottom: 10,
	},
	buttonText: {
		color: "#FFFFFF",
		fontSize: 18,
		textAlign: "center",
		fontWeight: "bold",
	},
	orText: {
		fontSize: 16,
		marginTop: 10,
		marginBottom: 5,
		color: "#FFFFFF", // Add a text color for better visibility on the background image
	},
	link: {
		marginBottom: 20,
	},
	linkText: {
		color: "#007AFF",
		fontSize: 16,
		textAlign: "center",
		textDecorationLine: "underline",
	},
	logoContainer: {
		position: "absolute",
		top: 50,
		left: 10,
	},
	logoImage: {
		width: 70,
		height: 70,
	},
});
