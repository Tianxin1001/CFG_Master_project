import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WelcomeMessage from "../components/welcomeMessage";
import UserProfileButton from "../components/UserProfileButton";
import styles from "../components/Styles";

export default function NewsCategorySelectionPage() {
	const navigation = useNavigation();
	const [selectedCategories, setSelectedCategories] = useState([]);

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

	const handleCategorySelect = (category) => {
		if (selectedCategories.includes(category)) {
			setSelectedCategories(selectedCategories.filter((c) => c !== category));
		} else {
			setSelectedCategories([...selectedCategories, category]);
		}
	};

	const handleGetNews = () => {
		navigation.navigate("NewsListPage", {
			selectedCategories: selectedCategories,
			allCategories: [
				"news",
				"sport",
				"tech",
				"world",
				"finance",
				"politics",
				"business",
				"economics",
				"entertainment",
				"beauty",
				"travel",
				"music",
				"food",
				"science",
				"gaming",
				"energy",
			],
		});
	};

	return (
		<View style={styles.newsCategorySelectionPageStyles.container}>
			<WelcomeMessage />
			<View style={styles.newsCategorySelectionPageStyles.headingContainer}>
				<Text style={styles.newsCategorySelectionPageStyles.heading}>
					Select Your Favourite Categories
				</Text>
			</View>
			<View
				style={styles.newsCategorySelectionPageStyles.categoryButtonContainer}
			>
				{[
					"news",
					"sport",
					"tech",
					"world",
					"finance",
					"politics",
					"business",
					"economics",
					"entertainment",
					"beauty",
					"travel",
					"music",
					"food",
					"science",
					"gaming",
					"energy",
				].map((category) => (
					<TouchableOpacity
						key={category}
						style={[
							styles.newsCategorySelectionPageStyles.categoryButton,
							selectedCategories.includes(category) &&
								styles.newsCategorySelectionPageStyles.selectedCategoryButton,
						]}
						onPress={() => handleCategorySelect(category)}
					>
						<Text
							style={[
								styles.newsCategorySelectionPageStyles.categoryButtonText,
								selectedCategories.includes(category) &&
									styles.newsCategorySelectionPageStyles
										.selectedCategoryButtonText,
							]}
						>
							{category}
						</Text>
					</TouchableOpacity>
				))}
			</View>
			<TouchableOpacity
				style={styles.newsCategorySelectionPageStyles.continueButton}
				onPress={handleGetNews}
			>
				<Text style={styles.newsCategorySelectionPageStyles.continueButtonText}>
					Get your News now!
				</Text>
			</TouchableOpacity>
		</View>
	);
}
