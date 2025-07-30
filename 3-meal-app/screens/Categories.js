import { CATEGORIES } from "../extra-files/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";

function Categories({ navigation }) {
	function renderCategoryItem(itemData) {
		function pressHandler() {
			navigation.navigate("MealsOverview", {
				categoryId: itemData.item.id,
			});
		}

		return (
			<CategoryGridTitle
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={pressHandler}
			/>
		);
	}

	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={renderCategoryItem}
			numColumns={2}
			key={2}
		/>
	);
}

export default Categories;
