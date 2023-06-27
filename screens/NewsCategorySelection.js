import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { apiConfig } from "../config/GnewsAPI";

export default function NewsCategorySelection() {
    const navigation = useNavigation();
    const [selectedCategories, setSelectedCategories] = useState([]);
  
    const handleCategorySelect = (category) => {
        if  (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };
  
    const handleContinue = () => {
        navigation.navigate("NewsCategorySelection", {
        selectedCategories: selectedCategories,
        });
    };
  
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Select Your Favourite Categories</Text>
            </View>
            <View style={styles.categoryButtonContainer}>
                <TouchableOpacity
                    style={[styles.categoryButton, selectedCategories.includes("business") && styles.selectedCategoryButton]}
                    onPress={() => handleCategorySelect("business")}>
                <Text style={[styles.categoryButtonText, selectedCategories.includes("business") && styles.selectedCategoryButtonText]}>
                    Business
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.categoryButton, selectedCategories.includes("general") && styles.selectedCategoryButton]}
                    onPress={() => handleCategorySelect("general")}>
                <Text style={[styles.categoryButtonText, selectedCategories.includes("general") && styles.selectedCategoryButtonText]}>
                    General
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.categoryButton, selectedCategories.includes("Technology") && styles.selectedCategoryButton]}
                    onPress={() => handleCategorySelect("Technology")}>
                <Text style={[styles.categoryButtonText, selectedCategories.includes("Technology") && styles.selectedCategoryButtonText]}>
                    Technology
                </Text>
                </TouchableOpacity>
                {/* Add more TouchableOpacity buttons for other categories */}
            </View>
            <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
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
        marginBottom: 100, 
    },
    heading: {
        fontSize: 24,
        marginBottom: 30,
        textAlign: "center",
        fontWeight: "bold",
    },
    categoryButton: {
        backgroundColor: "white",
        borderWidth: 2, 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
        marginLeft: 10,
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
        // fontWeight: "bold",
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
  