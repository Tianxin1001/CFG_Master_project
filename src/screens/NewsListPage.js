import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	Image,
	Linking,
	ScrollView,
} from "react-native";
import { API_KEY } from "../../config/NewscatcherAPIKey";
import WelcomeMessage from "../components/welcomeMessage";
import UserProfileButton from "../components/UserProfileButton";
import styles from "../components/Styles";

export default function NewsListPage({ route }) {
	const { selectedCategories } = route.params;
	const [news, setNews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const handleProfilePress = () => {
		navigation.navigate("Profile");
	};

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: "My Screen",
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
		<View style={styles.newsListPageStyles.container}>
			<WelcomeMessage />
			{isLoading ? ( // Conditional rendering of loading image
				<View style={styles.newsListPageStyles.loadingContainer}>
					<Image
						source={require("../../assets/loading_anime.gif")}
						style={[
							styles.newsListPageStyles.loadingImage,
							{ width: 450, height: 800, alignSelf: "center" },
						]}
						resizeMode="cover"
					/>
				</View>
			) : (
				<>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<View style={styles.newsListPageStyles.subbar}>
							<Text style={styles.newsListPageStyles.subbarText}>
								Selected Categories:
							</Text>
							<View
								style={styles.newsListPageStyles.selectedCategoriesContainer}
							>
								{selectedCategories.map((category) => (
									<TouchableOpacity
										key={category}
										style={styles.newsListPageStyles.selectedCategoryButton}
									>
										<Text
											style={
												styles.newsListPageStyles.selectedCategoryButtonText
											}
										>
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
						contentContainerStyle={styles.newsListPageStyles.newsList}
					/>
				</>
			)}
		</View>
	);
}
