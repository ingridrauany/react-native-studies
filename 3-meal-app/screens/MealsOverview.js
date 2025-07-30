import { StyleSheet, FlatList, View } from "react-native";
import { MEALS, CATEGORIES } from "../extra-files/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect } from "react";

function MealsOverview({ route, navigation }) {
	const catId = route.params.categoryId;

	const displayedMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(catId) >= 0;
	});

	useEffect(() => {
		const categoryTitle = CATEGORIES.find(
			(category) => category.id === catId
		).title;

		navigation.setOptions({
			title: categoryTitle,
		});
	}, [catId, navigation]);

	function renderMealItem(itemData) {
		return (
			<MealItem
				id={itemData.item.id}
				title={itemData.item.title}
				imageUrl={itemData.item.imageUrl}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
			/>
		);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
}

export default MealsOverview;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
