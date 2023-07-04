import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../components/Styles";

const Profile = ({ name, password }) => {
	return (
		<View style={styles.profileStyles.container}>
			<Text style={styles.profileStyles.heading}>Profile</Text>
			<Text style={styles.profileStyles.label}>Nickname:</Text>
			<Text style={styles.profileStyles.value}>{name}</Text>
			<Text style={styles.profileStyles.label}>Password:</Text>
			<Text style={styles.profileStyles.value}>{password}</Text>
		</View>
	);
};

export default Profile;
