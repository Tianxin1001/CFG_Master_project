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
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
							// headerLeft: null,
						// 	headerBackTitleVisible: false,
						// 	headerStyle: {
						// 	  backgroundColor: "#ffe6e6",
						// 	},
						// 	headerShown: false,
						//   }}
						}}
					/>
					<Stack.Screen
            name="Profile"
            component={Profile}
            options={({ navigation }) => ({
              headerStyle: {
                height: 110,
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
              ),
              headerBackTitleVisible: false,
            })}
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
