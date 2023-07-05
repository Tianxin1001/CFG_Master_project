import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import WelcomeMessage from "../components/welcomeMessage";
import UserProfileButton from '../components/UserProfileButton';

export default function NewsCategorySelectionPage() {
	const navigation = useNavigation();
	const [selectedCategories, setSelectedCategories] = useState([]);

	const handleProfilePress = () => {
		navigation.navigate('Profile');
	  };


	React.useLayoutEffect(() => {
		navigation.setOptions({
		  headerTitle: 'Select News Category',
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
		if (selectedCategories.length === 0) {
		  // Show an alert or perform any desired action to inform the user
		  alert("Please select at least one category");
		} else {
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
		}
	  };
	  

	return (
		<View style={styles.container}>
			{/* <WelcomeMessage /> */}
			<View style={styles.headingContainer}>
				<Text style={styles.heading}>Select Your Favourite Categories</Text>
			</View>
			<View style={styles.categoryButtonContainer}>
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
							styles.categoryButton,
							selectedCategories.includes(category) &&
								styles.selectedCategoryButton,
						]}
						onPress={() => handleCategorySelect(category)}
					>
						<Text
							style={[
								styles.categoryButtonText,
								selectedCategories.includes(category) &&
									styles.selectedCategoryButtonText,
							]}
						>
							{category}
						</Text>
					</TouchableOpacity>
				))}
			</View>
			<TouchableOpacity style={styles.continueButton} onPress={handleGetNews}>
				<Text style={styles.continueButtonText}>Get your News now!</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
		backgroundColor: "#ffe6e6",
	},
	headingContainer: {
		marginBottom: 10,
	},
	heading: {
		fontSize: 24,
		marginBottom: 20,
		textAlign: "center",
		fontWeight: "bold",
	},
	categoryButton: {
		backgroundColor: "white",
		borderWidth: 2,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 25,
		marginBottom: 10,
		marginLeft: 20,
	},
	categoryButtonContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		marginBottom: 10,
	},
	selectedCategoryButton: {
		backgroundColor: "#F96638",
	},
	categoryButtonText: {
		color: "black",
		fontSize: 18,
		textAlign: "center",
	},
	selectedCategoryButtonText: {
		// fontWeight: "bold"
	},
	continueButton: {
		backgroundColor: "black",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		marginTop: 20,
	},
	continueButtonText: {
		color: "#FFFFFF",
		fontSize: 18,
		textAlign: "center",
	},
});
