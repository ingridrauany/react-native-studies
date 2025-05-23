import { useState } from "react";
import {
	StyleSheet,
	View,
	Button,
	TextInput,
	Text,
	FlatList,
} from "react-native";

export default function App() {
	const [goals, setGoals] = useState([]);
	const [enteredGoal, setEnteredGoal] = useState("");

	function goalInputHandler(enteredGoal) {
		setEnteredGoal(enteredGoal);
	}

	function addGoalHandler() {
		setGoals((currentGoals) => [...currentGoals, enteredGoal]);
		setEnteredGoal("");
	}

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your goal!"
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<Button
					title="Add goal"
					onPress={addGoalHandler}
					disabled={enteredGoal.trim().length === 0}
				/>
			</View>
			<Text style={styles.goalsListTitle}>List of goals</Text>
			<FlatList
				style={styles.goalsContainer}
				alwaysBounceVertical={false}
				data={goals}
				renderItem={(renderGoalItem) => {
					return (
						<View
							key={renderGoalItem.index}
							style={styles.goalItem}
						>
							<Text style={styles.goalText}>
								{renderGoalItem.item}
							</Text>
						</View>
					);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: 50,
		paddingHorizontal: 16,
		flex: 1,
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
		marginTop: 50,
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "70%",
		marginRight: 8,
		padding: 8,
		flex: 1,
	},
	goalsListTitle: {
		marginTop: 16,
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 8,
	},
	goalsContainer: {},
	goalItem: {
		padding: 8,
		marginVertical: 4,
		backgroundColor: "#f9c2ff",
		borderRadius: 6,
	},
	goalText: {
		color: "#000",
	},
});
