import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import WelcomeMessage from "../components/welcomeMessage";
import UserProfileButton from "../components/UserProfileButton";
import styles from "../components/Styles";

const WorldMap = ({ navigation }) => {
	const handleMarkerPress = (continent) => {
		navigation.navigate("ContinentCountries", { continent });
	};

	const renderCallout = (continent) => (
		<Callout onPress={() => handleMarkerPress(continent)}>
			<TouchableOpacity style={styles.calloutButton}>
				<Text style={styles.calloutButtonText}>Select {continent}</Text>
			</TouchableOpacity>
		</Callout>
	);

	const handleProfilePress = () => {
		navigation.navigate("Profile");
	};

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: "Select continent!",
			headerRight: () => <UserProfileButton onPress={handleProfilePress} />,
		});
	}, [navigation]);

	return (
		<View style={styles.worldMapStyles.container}>
			<WelcomeMessage />
			<MapView
				style={styles.worldMapStyles.map}
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 70,
					longitudeDelta: 70,
				}}
			>
				<Marker
					coordinate={{ latitude: -15.7801, longitude: -56.8746 }}
					title="South America"
					description="Click here to choose South America"
				>
					{renderCallout("South America")}
				</Marker>
				<Marker
					coordinate={{ latitude: 54.526, longitude: -105.2551 }}
					title="North America"
					description="Click here to choose North America"
				>
					{renderCallout("North America")}
				</Marker>
				<Marker
					coordinate={{ latitude: 50.0755, longitude: 27.2348 }}
					title="Europe"
					description="Click here to choose Europe"
				>
					{renderCallout("Europe")}
				</Marker>
				<Marker
					coordinate={{ latitude: 9.082, longitude: 17.1134 }}
					title="Africa"
					description="Click here to choose Africa"
				>
					{renderCallout("Africa")}
				</Marker>
				<Marker
					coordinate={{ latitude: 56.0, longitude: 85.6197 }}
					title="Asia"
					description="Click here to choose Asia"
				>
					{renderCallout("Asia")}
				</Marker>
				<Marker
					coordinate={{ latitude: -25.2744, longitude: 133.7751 }}
					title="Oceania"
					description="Click here to choose Australia"
				>
					{renderCallout("Oceania")}
				</Marker>
			</MapView>
		</View>
	);
};

export default WorldMap;
