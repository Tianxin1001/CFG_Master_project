import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	Image,
	Linking,
	ScrollView,
} from "react-native";
import { API_KEY } from "../../config/NewscatcherAPIKey";
import { useNavigation } from "@react-navigation/native";
// import WelcomeMessage from "../components/welcomeMessage";
import UserProfileButton from '../components/UserProfileButton';

export default function NewsListPage({ route }) {
	const { selectedCategories } = route.params;
	const [news, setNews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const navigation = useNavigation();

	const handleProfilePress = () => {
		navigation.navigate('Profile');
	  };


	  useEffect(() => {
		navigation.setOptions({
		  headerTitle: 'News List',
		  headerRight: () => <UserProfileButton onPress={handleProfilePress} />,
		});
	  }, [navigation]);

	const categoriesList = [
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
	];

	const fetchNews = async (category) => {
		try {
			const response = await fetch(
				`https://api.newscatcherapi.com/v2/latest_headlines?topic=${category}&lang=en`,
				{
					headers: {
						"x-api-key": API_KEY,
					},
				}
			);
			const result = await response.json();
			if (result && result.articles) {
				return result.articles;
			} else {
				console.error("Invalid response format:", result);
				return [];
			}
		} catch (error) {
			console.error(error);
			return [];
		}
	};

	useEffect(() => {
		const fetchSelectedNews = async () => {
			const selectedNews = [];

			const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

			for (const category of selectedCategories) {
				if (categoriesList.includes(category)) {
					await delay(1000); // Delay of 1 second before making each API request
					const categoryNews = await fetchNews(category);
					selectedNews.push(...categoryNews);
				}
			}

			setNews(selectedNews);
			setIsLoading(false);
		};

		fetchSelectedNews();
	}, [selectedCategories]);

	const handleNewsItemClick = (item) => {
		Linking.openURL(item.link);
	};

	const renderNewsItem = ({ item }) => (
		<TouchableOpacity
			style={styles.newsItem}
			onPress={() => handleNewsItemClick(item)}
		>
			<Image
				source={{
					uri:
						item.media ||
						"https://files.slack.com/files-pri/T05BN1XNLCQ-F05F2QENJH3/image.png",
				}}
				style={styles.newsImage}
				resizeMode="cover"
			/>
			<View style={styles.newsContent}>
				<Text style={styles.newsTitle}>{item.title}</Text>
				<Text numberOfLines={3} style={styles.newsDescription}>
					{item.summary}
				</Text>
			</View>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			{/* <WelcomeMessage /> */}
			{isLoading ? ( // Conditional rendering of loading image
				<View style={styles.loadingContainer}>
					<Image
						source={require("../../assets/loading_anime.gif")}
						style={[
							styles.loadingImage,
							{ width: 450, height: 820, alignSelf: "center" },
						]}
						resizeMode="cover"
					/>
				</View>
			) : (
				<>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<View style={styles.subbar}>
							<Text style={styles.subbarText}>Selected Categories:</Text>
							<View style={styles.selectedCategoriesContainer}>
								{selectedCategories.map((category) => (
									<TouchableOpacity
										key={category}
										style={styles.selectedCategoryButton}
									>
										<Text style={styles.selectedCategoryButtonText}>
											{category}
										</Text>
									</TouchableOpacity>
								))}
							</View>
						</View>
					</ScrollView>
					<FlatList
						data={news}
						renderItem={renderNewsItem}
						keyExtractor={(item, index) =>
							item.id ? item.id.toString() : index.toString()
						}
						contentContainerStyle={styles.newsList}
					/>
				</>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
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
});
