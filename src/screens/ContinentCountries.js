import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	FlatList,
	Modal,
} from "react-native";
import WelcomeMessage from "../components/welcomeMessage";
import UserProfileButton from '../components/UserProfileButton';

const ContinentCountries = ({ route, navigation }) => {
	const { continent } = route.params;
	const [countries, setCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState(null);
	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		fetchCountries();
	}, [continent]);

	const fetchCountries = async () => {
		try {
			const response = await fetch(
				`https://restcountries.com/v3/region/${continent}`
			);
			const data = await response.json();
			// Sort the country data by country name
			const sortedCountries = data.sort((a, b) =>
				a.name.common.localeCompare(b.name.common)
			);
			setCountries(sortedCountries);
		} catch (error) {
			console.error("Error fetching countries:", error);
		}
	};

	const handleCountryPress = (country) => {
		setSelectedCountry(country);
		setShowPopup(true);
	};

	const handlePopupClose = () => {
		setShowPopup(false);
	};

	const handleChooseCategoriesPress = () => {
		setShowPopup(false);
		// Navigate to the page for choosing news categories
		navigation.navigate("NewsCategorySelectionPage");
	};

	const renderCountryItem = ({ item }) => {
		return (
			<TouchableOpacity
				style={styles.countryItem}
				onPress={() => handleCountryPress(item.name.common)}
			>
				<Text style={styles.countryName}>{item.name.common}</Text>
			</TouchableOpacity>
		);
	};

	const handleProfilePress = () => {
		navigation.navigate('Profile');
	  };

	React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'My Screen',
      headerRight: () => <UserProfileButton onPress={handleProfilePress} />,
		});
	}, [navigation]);

	return (
		<View style={styles.container}>
			<WelcomeMessage />
			<Text style={styles.title}>{continent} Countries</Text>

			<FlatList
				data={countries}
				renderItem={renderCountryItem}
				keyExtractor={(item) => item.cca3}
			/>
			<Modal visible={showPopup} animationType="fade" transparent>
				<View style={styles.popupContainer}>
					<View style={styles.popupContent}>
						<Text style={styles.popupText}>
							Selected Country: {selectedCountry}
						</Text>
						<TouchableOpacity
							style={styles.popupButton}
							onPress={handleChooseCategoriesPress}
						>
							<Text style={styles.popupButton}>
								Personalise your news experience. Choose news categories you're
								interested in!
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.popupCloseButton}
							onPress={handlePopupClose}
						>
							<Text style={styles.popupCloseButtonText}>Close</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
		backgroundColor: "#ffe6e6",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	countryItem: {
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	countryName: {
		fontSize: 16,
	},
	button: {
		marginTop: 20,
		backgroundColor: "#007bff",
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
	chooseCountryButton: {
		backgroundColor: "blue",
		padding: 10,
		borderRadius: 5,
		marginBottom: 10,
	},
	chooseCountryButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	chooseCategoriesButton: {
		backgroundColor: "green",
		padding: 10,
		borderRadius: 5,
	},
	chooseCategoriesButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	popupContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	popupContent: {
		backgroundColor: "white",
		padding: 20,
		borderRadius: 5,
	},
	popupText: {
		fontSize: 18,
		marginBottom: 10,
	},
	popupButton: {
		backgroundColor: "#007bff",
		padding: 10,
		borderRadius: 5,
		marginBottom: 10,
	},
	popupCloseButton: {
		marginTop: 10,
		backgroundColor: "blue",
		padding: 10,
		borderRadius: 5,
		alignSelf: "center",
	},
	popupCloseButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default ContinentCountries;
