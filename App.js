import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomePage from "./src/screens/WelcomePage";
import AuthorisedPage from "./src/screens/AuthorisedPage";
import NewsCategorySelectionPage from "./src/screens/NewsCategorySelectionPage";
import NewsListPage from "./src/screens/NewsListPage";
import WorldMap from "./src/screens/WorldMap";
import Continentcountries from "./src/screens/ContinentCountries";
import Profile from "./src/screens/Profile"
import { Provider } from "react-redux";
import { createStore } from "redux";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function reducer(state, action) {
	if (action.type === "changeUsername") {
		return { username: action.payload };
	} else {
		return state;
	}
}

const store = createStore(reducer, { name: "" });

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Welcome"
						component={WelcomePage}
						options={{ headerShown: false }}
					/>
					<Stack.Screen 
						name="Authorisation" 
						component={AuthorisedPage} 
						options={{
							headerStyle: {
								height: 110,
							},
						}}
					/>
					<Stack.Screen
						name="Profile"
						component={Profile}
						options={{
							headerStyle: {
								height: 110,
							},
						}}
					/>
					<Stack.Screen 
						name="WorldMap" 
						component={WorldMap} 
						options={{
							headerStyle: {
								height: 110,
							},
						}}
					/>
					<Stack.Screen
						name="ContinentCountries"
						component={Continentcountries}
						options={{
							headerStyle: {
								height: 110,
							},
						}}
					/>
					<Stack.Screen
						name="NewsCategorySelectionPage"
						component={NewsCategorySelectionPage}
						// options={{
						// 	headerLeft: null,
						// 	headerBackTitleVisible: false,
						// 	headerStyle: {
						// 	  backgroundColor: "#ffe6e6",
						// 	},
						// 	headerShown: false,
						//   }}
						options={{
							headerStyle: {
								height: 110,
							},
						}}
					/>
					<Stack.Screen
						name="NewsListPage"
						component={NewsListPage}
						options={{
							headerTitle: "News List",
							headerStyle: {
								height: 110,
							},
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
