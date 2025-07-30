import { StyleSheet, Text } from "react-native";
import Categories from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetail from "./screens/MealDetail";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: "#943f3fff",
					},
					headerTintColor: "white",
					contentStyle: {
						backgroundColor: "#e2e2e2ff",
					},
				}}
			>
				<Stack.Screen
					name="Categories"
					component={Categories}
					options={{
						title: "All Categories",
					}}
				/>
				<Stack.Screen name="MealsOverview" component={MealsOverview} />
				<Stack.Screen
					name="MealDetail"
					component={MealDetail}
					options={{
						headerRight: () => {
							return <Text>Right button</Text>;
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {},
});
