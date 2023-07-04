const styles = {
	//  Styles for AuthorisedPage
	authorisedPageStyles: {
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
			flexDirection: "row",
			alignItems: "center",
		},
		input: {
			flex: 1,
			padding: 10,
		},
		passwordVisibilityButton: {
			padding: 5,
			marginLeft: -10,
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
	},

	// Styles for ContinentCountries file
	continentCountriesStyles: {
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
	},

	//  Styles for NewsCategorySelectionPage
	newsCategorySelectionPageStyles: {
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
	},

	// Styles for NewsListPage
	newsListPageStyles: {
		container: {
			flex: 1,
			backgroundColor: "#ffe6e6",
		},
		subbar: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			padding: 10,
			backgroundColor: "#fff",
		},
		subbarText: {
			fontSize: 18,
			fontWeight: "bold",
		},
		selectedCategoriesContainer: {
			flexDirection: "row",
			marginLeft: 10,
		},
		selectedCategoryButton: {
			backgroundColor: "#F96638",
			borderWidth: 2,
			paddingVertical: 8,
			paddingHorizontal: 16,
			borderRadius: 20,
			marginHorizontal: 5,
		},
		selectedCategoryButtonText: {
			color: "#fff",
			fontSize: 14,
		},
		newsList: {
			paddingVertical: 10,
			paddingHorizontal: 20,
		},
		newsItem: {
			flexDirection: "row",
			alignItems: "center",
			marginBottom: 20,
			height: 110,
		},
		newsImage: {
			width: 80,
			height: 80,
			marginRight: 10,
			borderRadius: 4,
		},
		newsContent: {
			flex: 1,
		},
		newsTitle: {
			fontSize: 16,
			fontWeight: "bold",
			marginBottom: 5,
		},
		newsDescription: {
			fontSize: 14,
		},
	},

	// Styles for the WelcomePage
	welcomePageStyles: {
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
			fontSize: 30,
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
	},

	// Styles for WorldMap page
	worldMapStyles: {
		container: {
			flex: 1,
		},
		map: {
			flex: 1,
		},
		calloutButton: {
			backgroundColor: "blue",
			padding: 10,
			borderRadius: 5,
		},
		calloutButtonText: {
			color: "white",
			fontWeight: "bold",
		},
	},

	// Styles for Profile Page
	profileStyles: {
		container: {
			flex: 1,
			padding: 20,
			backgroundColor: "#fff",
		},
		heading: {
			fontSize: 24,
			fontWeight: "bold",
			marginBottom: 20,
		},
		label: {
			fontSize: 16,
			fontWeight: "bold",
			marginBottom: 5,
		},
		value: {
			fontSize: 16,
			marginBottom: 15,
		},
	},
};

export default styles;
