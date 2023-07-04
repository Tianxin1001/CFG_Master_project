import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ImageBackground,
	Image,
} from "react-native";
import styles from "../components/Styles";

export default function WelcomePage({ navigation }) {
	const handleLoginSignUp = () => {
		navigation.navigate("Authorisation");
	};

	const handleContinueWithoutAccount = () => {
		navigation.navigate("WorldMap");
	};

	return (
		<ImageBackground
			source={require("../../assets/Start.png")}
			style={styles.welcomePageStyles.backgroundImage}
		>
			<View style={styles.welcomePageStyles.container}>
				<View style={styles.welcomePageStyles.logoContainer}></View>
				<Text style={styles.welcomePageStyles.message}>
					Your personalised news starts here....
				</Text>
				<TouchableOpacity
					style={styles.welcomePageStyles.button}
					onPress={handleLoginSignUp}
				>
					<Text style={styles.welcomePageStyles.buttonText}>
						Login / Sign Up
					</Text>
				</TouchableOpacity>
				<Text style={styles.welcomePageStyles.orText}>or</Text>
				<TouchableOpacity
					style={styles.welcomePageStyles.link}
					onPress={handleContinueWithoutAccount}
				>
					<Text style={styles.welcomePageStyles.linkText}>
						Continue without an account
					</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);
}
