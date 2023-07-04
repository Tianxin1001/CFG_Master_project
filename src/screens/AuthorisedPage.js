import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	ImageBackground,
	Alert,
} from "react-native";
import { CheckBox } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import styles from "../components/Styles";

export default function AuthorizedPage() {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [isPasswordVisible, setPasswordVisible] = useState(false);
	const [isChecked, setChecked] = useState(false);
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const handleLogin = async () => {
		if (!name || !password) {
			alert("Please enter both name and password");
			return;
		}

		if (!isChecked) {
			alert("Please accept the terms and conditions");
			return;
		}

		try {
			const storedAccounts = await AsyncStorage.getItem("accounts");
			let accounts = storedAccounts ? JSON.parse(storedAccounts) : [];

			const matchingAccount = accounts.find(
				(account) => account.name === name && account.password === password
			);
			if (matchingAccount) {
				alert("Login successful");
				navigation.navigate("Profile");
			} else {
				Alert.alert(
					"Registration",
					"The Nickname is not registered. Do you want to register now?",
					[
						{ text: "Cancel", style: "cancel" },
						{ text: "Register", onPress: handleRegister },
					]
				);
			}
		} catch (error) {
			console.error("Error retrieving stored accounts:", error);
		}
	};

	const handleRegister = async () => {
		try {
			const storedAccounts = await AsyncStorage.getItem("accounts");
			let accounts = storedAccounts ? JSON.parse(storedAccounts) : [];

			// Check if the name already exists
			const existingAccount = accounts.find((account) => account.name === name);
			if (existingAccount) {
				alert("An account with this name already exists");
				return;
			}

			// Add the new account
			const newAccount = { name, password };
			accounts.push(newAccount);
			await AsyncStorage.setItem("accounts", JSON.stringify(accounts));

			alert("Registration successful");
			navigation.navigate("Profile");
		} catch (error) {
			console.error("Error storing accounts:", error);
		}
	};

	const togglePasswordVisibility = () => {
		setPasswordVisible(!isPasswordVisible);
	};

	const toggleCheckbox = () => {
		setChecked(!isChecked);
	};

	return (
		<ImageBackground
			source={require("../../assets/background.png")}
			style={styles.authorisedPageStyles.backgroundImage}
		>
			<View style={styles.authorisedPageStyles.container}>
				<Text style={styles.authorisedPageStyles.message}>Login / Sign up</Text>
				<Text style={styles.authorisedPageStyles.subMessage}>
					Allow a more personalized experience...
				</Text>
				<View style={styles.authorisedPageStyles.inputContainer}>
					<TextInput
						style={styles.authorisedPageStyles.input}
						placeholder="Nickname"
						value={name}
						onChangeText={(text) => setName(text)}
						autoCapitalize="none"
					/>
				</View>
				<View style={styles.authorisedPageStyles.inputContainer}>
					<TextInput
						style={styles.authorisedPageStyles.input}
						placeholder="Password"
						secureTextEntry={!isPasswordVisible}
						value={password}
						onChangeText={(text) => setPassword(text)}
						autoCapitalize="none"
					/>
					<TouchableOpacity
						style={styles.authorisedPageStyles.passwordVisibilityButton}
						onPress={togglePasswordVisibility}
					>
						<Ionicons
							name={isPasswordVisible ? "eye-off" : "eye"}
							size={20}
							color="gray"
						/>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={styles.authorisedPageStyles.button}
					onPress={handleLogin}
				>
					<Text style={styles.authorisedPageStyles.buttonText}>Login</Text>
				</TouchableOpacity>
				<Text style={styles.authorisedPageStyles.disclaimer}>
					*If the nickname is not in our database, we will create a new account
					for you
				</Text>
				<View style={styles.authorisedPageStyles.termsContainer}>
					<CheckBox
						checked={isChecked}
						onPress={toggleCheckbox}
						checkedColor="black"
						size={20}
						iconType="material-community"
						checkedIcon="checkbox-outline"
						uncheckedIcon="checkbox-blank-outline"
					/>
					<Text style={styles.authorisedPageStyles.termsText}>
						I agree to the{" "}
					</Text>
					<TouchableOpacity>
						<Text
							style={[
								styles.authorisedPageStyles.termsText,
								styles.authorisedPageStyles.link,
							]}
						>
							terms & conditions
						</Text>
					</TouchableOpacity>
					<Text style={styles.authorisedPageStyles.termsText}> and </Text>
					<TouchableOpacity>
						<Text
							style={[
								styles.authorisedPageStyles.termsText,
								styles.authorisedPageStyles.link,
							]}
						>
							privacy statement
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={styles.authorisedPageStyles.continueButton}
					onPress={() => navigation.navigate("WorldMap")}
				>
					<Text style={styles.authorisedPageStyles.continueButtonText}>
						Continue
					</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);
}
