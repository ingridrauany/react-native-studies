import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { MEALS } from "../extra-files/dummy-data";

function MealDetail({ route }) {
	const mealId = route.params.mealId;
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return (
		<ScrollView>
			<Image
				style={styles.image}
				source={{ uri: selectedMeal.imageUrl }}
			/>
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<View style={styles.details}>
				<Text style={styles.detailItem}>{selectedMeal.duration}m</Text>
				<Text style={styles.detailItem}>
					{selectedMeal.complexity.toUpperCase()}
				</Text>
				<Text style={styles.detailItem}>
					{selectedMeal.affordability.toUpperCase()}
				</Text>
			</View>
			<View>
				<View style={styles.subtitleContainer}>
					<Text style={styles.subtitle}>Ingredients</Text>
				</View>
				{selectedMeal.ingredients.map((ingredient) => (
					<Text key={ingredient}>{ingredient}</Text>
				))}
				<View style={styles.subtitleContainer}>
					<Text style={styles.subtitle}>Steps</Text>
				</View>
				{selectedMeal.steps.map((step) => (
					<Text key={step}>{step}</Text>
				))}
			</View>
		</ScrollView>
	);
}

export default MealDetail;

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		margin: 8,
		textAlign: "center",
	},
	details: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 8,
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
	},
	subtitleContainer: {
		borderBottomColor: "#000",
		borderBottomWidth: 2,
		margin: 4,
		padding: 6,
	},
	subtitle: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
});
