import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Linking } from "react-native";

export default function NewsListPage({ route }) {
  const { selectedCategories } = route.params;
  const [news, setNews] = useState([]);

  const API_KEY = "2dc19639eb3c7a02b6aec6231cd4cf50";

  const fetchNews = async (category) => {
    try {
      const response = await fetch(
        `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=${API_KEY}`
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

      for (const category of selectedCategories) {
        const categoryNews = await fetchNews(category);
        selectedNews.push(...categoryNews);
      }

      setNews(selectedNews);
    };

    fetchSelectedNews();
  }, [selectedCategories]);

  const handleNewsItemClick = (item) => {
    Linking.openURL(item.url);
  };

  const renderNewsItem = ({ item }) => (
    <TouchableOpacity
      style={styles.newsItem}
      onPress={() => handleNewsItemClick(item)}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.newsImage}
        resizeMode="cover"
      />
      <View style={styles.newsContent}>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.subbar}>
        <Text style={styles.subbarText}>Selected Categories:</Text>
        <View style={styles.selectedCategoriesContainer}>
          {selectedCategories.map((category) => (
            <TouchableOpacity
              key={category}
              style={styles.selectedCategoryButton}
            >
              <Text style={styles.selectedCategoryButtonText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <FlatList
        data={news}
        renderItem={renderNewsItem}
        keyExtractor={(item, index) => item.url + index}
        contentContainerStyle={styles.newsList}
      />
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
