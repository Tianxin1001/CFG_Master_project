import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Modal } from "react-native";
import WelcomeMessage from "../components/welcomeMessage";
import UserProfileButton from "../components/UserProfileButton";
import styles from "../components/Styles";

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
				style={styles.continentCountriesStyles.countryItem}
				onPress={() => handleCountryPress(item.name.common)}
			>
				<Text style={styles.continentCountriesStyles.countryName}>
					{item.name.common}
				</Text>
			</TouchableOpacity>
		);
	};

	const handleProfilePress = () => {
		// Code to handle profile button press
		// Add your logic here
	};

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: "My Screen",
			headerRight: () => <UserProfileButton onPress={handleProfilePress} />,
		});
	}, [navigation]);

	return (
		<View style={styles.continentCountriesStyles.container}>
			<WelcomeMessage />
			<Text style={styles.continentCountriesStyles.title}>
				{continent} Countries
			</Text>

			<FlatList
				data={countries}
				renderItem={renderCountryItem}
				keyExtractor={(item) => item.cca3}
			/>
			<Modal visible={showPopup} animationType="fade" transparent>
				<View style={styles.continentCountriesStyles.popupContainer}>
					<View style={styles.continentCountriesStyles.popupContent}>
						<Text style={styles.continentCountriesStyles.popupText}>
							Selected Country: {selectedCountry}
						</Text>
						<TouchableOpacity
							style={styles.continentCountriesStyles.popupButton}
							onPress={handleChooseCategoriesPress}
						>
							<Text style={styles.continentCountriesStyles.popupButton}>
								Personalise your news experience. Choose news categories you're
								interested in!
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.continentCountriesStyles.popupCloseButton}
							onPress={handlePopupClose}
						>
							<Text
								style={styles.continentCountriesStyles.popupCloseButtonText}
							>
								Close
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default ContinentCountries;
