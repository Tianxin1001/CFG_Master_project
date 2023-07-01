import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomePage from "./screens/WelcomePage";
import AuthorisedPage from "./screens/AuthorisedPage";
import NewsCategorySelectionPage from "./screens/NewsCategorySelectionPage"; 
import NewsListPage from "./screens/NewsListPage";
import WorldMap from "./screens/WorldMap";
import Continentcountries from "./screens/ContinentCountries";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
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
        />
        <Stack.Screen 
          name="WorldMap" 
          component={WorldMap} 
        />
        <Stack.Screen
          name="ContinentCountries"
          component={Continentcountries}
        />
        <Stack.Screen
          name="NewsCategorySelectionPage"
          component={NewsCategorySelectionPage} 
          options={{
            headerLeft: null,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#ffe6e6",
            },
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="NewsListPage" 
          component={NewsListPage}
          options={{
            headerTitle: "News List", 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
