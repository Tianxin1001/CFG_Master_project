import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	ImageBackground,
} from "react-native";

export default function AuthorizedPage({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		console.log("Email:", email);
		console.log("Password:", password);

		setEmail("");
		setPassword("");
	};

	return (
		<ImageBackground
			source={require("../../assets/background.png")}
			style={styles.backgroundImage}
		>
			<View style={styles.container}>
				<Text style={styles.message}>Login / Sign up</Text>
				<Text style={styles.subMessage}>
					Allow a more personalised experience...
				</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Email Address"
						value={email}
						onChangeText={(text) => setEmail(text)}
					/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Password"
						secureTextEntry
						value={password}
						onChangeText={(text) => setPassword(text)}
					/>
				</View>
				<TouchableOpacity style={styles.button} onPress={handleLogin}>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
				<Text style={styles.disclaimer}>
					*If the email address is not in our database, we will create a new
					account for you
				</Text>
				<View style={styles.termsContainer}>
					<Ionicons name="checkbox-outline" size={20} color="black" />
					<Text style={styles.termsText}>I agree to the </Text>
					<TouchableOpacity>
						<Text style={[styles.termsText, styles.link]}>
							terms & conditions
						</Text>
					</TouchableOpacity>
					<Text style={styles.termsText}> and </Text>
					<TouchableOpacity>
						<Text style={[styles.termsText, styles.link]}>
							privacy statement
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={styles.continueButton}
					onPress={() => navigation.navigate("WorldMap")}
				>
					<Text style={styles.continueButtonText}>Continue</Text>
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
		marginBottom: 10,
		textAlign: "center",
	},
	subMessage: {
		fontSize: 16,
		marginBottom: 20,
		textAlign: "center",
	},
	inputContainer: {
		width: "100%",
		marginBottom: 10,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 5,
		backgroundColor: "#FFFFFF",
	},
	input: {
		padding: 10,
	},
	button: {
		backgroundColor: "#007AFF",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		marginBottom: 10,
		width: "100%",
	},
	buttonText: {
		color: "#FFFFFF",
		fontSize: 18,
		textAlign: "center",
	},
	disclaimer: {
		fontSize: 12,
		fontStyle: "italic",
		marginTop: 10,
		marginBottom: 20,
		textAlign: "center",
	},
	termsContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
		flexWrap: "wrap",
	},
	termsText: {
		fontSize: 14,
	},
	link: {
		textDecorationLine: "underline",
	},
	continueButton: {
		backgroundColor: "#007AFF",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		width: "100%",
	},
	continueButtonText: {
		color: "#FFFFFF",
		fontSize: 18,
		textAlign: "center",
	},
});
