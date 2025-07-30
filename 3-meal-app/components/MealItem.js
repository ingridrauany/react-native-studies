import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealItem({
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
	id,
}) {
	const navigation = useNavigation();

	function pressHandler() {
		navigation.navigate("MealDetail", {
			mealId: id,
		});
	}

	return (
		<View style={styles.container}>
			<Pressable onPress={pressHandler}>
				<View>
					<Image style={styles.image} source={{ uri: imageUrl }} />
					<Text style={styles.title}>{title}</Text>
				</View>
				<View style={styles.details}>
					<Text style={styles.detailItem}>{duration}m</Text>
					<Text style={styles.detailItem}>
						{complexity.toUpperCase()}
					</Text>
					<Text style={styles.detailItem}>
						{affordability.toUpperCase()}
					</Text>
				</View>
			</Pressable>
		</View>
	);
}

export default MealItem;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: "#fff",
		marginBottom: 16,
		borderRadius: 8,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
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
});
