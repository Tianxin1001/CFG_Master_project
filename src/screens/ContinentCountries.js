import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import UserProfileButton from '../components/UserProfileButton';

const ContinentCountries = ({ route, navigation }) => {
    // Extract the 'continent' parameter from the route
    const { continent } = route.params;

    // States for countries and selected country
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        fetchCountries();
    }, [continent]);

    const fetchCountries = async () => {
        try {
            const response = await fetch(`https://restcountries.com/v3/region/${continent}`);
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
        Alert.alert(
            "Selected Country",
            `${country}`,
            [
                {
                    text: "Confirm",
                    onPress: handleChooseCategoriesPress,
                },
                {
                    text: "Close",
                    style: "cancel",
                },
            ]
        );
    };

    const handleChooseCategoriesPress = () => {
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
            headerTitle: 'Select News Country',
            headerRight: () => <UserProfileButton onPress={handleProfilePress} />,
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{continent} Countries</Text>

            <FlatList
                data={countries}
                renderItem={renderCountryItem}
                keyExtractor={(item) => item.cca3}
            />
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
});

export default ContinentCountries;
