import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";

function GoalItem(props) {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: "#dddddd" }}
				style={({ pressed }) => pressed && styles.pressedItem}
				onPress={props.onDeleteItem.bind(this, props.id)}
			>
				<Text style={styles.goalText}>{props.text}</Text>
			</Pressable>
		</View>
	);
}

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		padding: 8,
		marginVertical: 4,
		backgroundColor: "#f9c2ff",
		borderRadius: 6,
	},
	goalText: {
		color: "#000",
		padding: 8,
	},
	pressedItem: {
		opacity: 0.5,
	},
});
