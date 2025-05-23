import { StyleSheet } from "react-native";
import { View, Button, TextInput, Modal, Image } from "react-native";
import { useState } from "react";

function GoalForm(props) {
	const [enteredGoal, setEnteredGoal] = useState("");

	function goalInputHandler(enteredText) {
		setEnteredGoal(enteredText);
	}

	function addGoalHandler() {
		props.onAddGoal(enteredGoal);
		setEnteredGoal("");
	}

	return (
		<Modal visible={props.isVisible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/goal.png")}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Your goal!"
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.buttonContainer}>
					<Button
						style={styles.button}
						title="Add goal"
						onPress={addGoalHandler}
						disabled={enteredGoal.trim().length === 0}
					/>
					<Button
						style={styles.button}
						title="Cancel"
						onPress={props.closeModal}
					/>
				</View>
			</View>
		</Modal>
	);
}

export default GoalForm;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
		marginTop: 50,
		gap: 16,
		backgroundColor: "#f9c2ff",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "70%",
		marginRight: 8,
		padding: 8,
	},
	buttonContainer: {
		flexDirection: "row",
		gap: 40,
	},
	button: {
		width: "40%",
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
});
