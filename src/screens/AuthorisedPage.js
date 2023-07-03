import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";

export default function AuthorisedPage({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const dispatch = useDispatch();
	const username = useSelector((state) => state.username);

	const handleLogin = () => {
		if (!email || !password) {
			setErrorMessage("Please enter your email and password");
			return;
		}
		if (email === "Test@test.com" && password === "test123") {
			const extractedUsername = email.split("@")[0]; // Extract username from email
			dispatch({ type: "changeUsername", payload: extractedUsername });

			navigation.navigate("WorldMap");
			setEmail("");
			setPassword("");
		} else {
			dispatch({ type: "changeUsername", payload: null }); // Clear the username in Redux store
			setErrorMessage("Please enter a valid email or password");
			setEmail("");
			setPassword("");
		}
	};

	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			setErrorMessage("");
		});

		return unsubscribe;
	}, [navigation]);

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
				{errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
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
	label: {
		fontSize: 18,
		marginBottom: 10,
	},
	error: {
		color: "red",
		marginBottom: 10,
	},
});
