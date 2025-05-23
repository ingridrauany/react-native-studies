import { StyleSheet, View, Text, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalForm from "./components/GoalForm";
import { useState } from "react";

export default function App() {
	const [goals, setGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	function addGoalHandler(goalText) {
		setGoals((currentGoals) => [
			...currentGoals,
			{ text: goalText, id: Math.random().toString() },
		]);
		setModalIsVisible(false);
	}

	function deleteGoalHandler(id) {
		setGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id !== id);
		});
	}

	function startAddGoalHandler() {
		setModalIsVisible(true);
	}

	function endAddGoalHandler() {
		setModalIsVisible(false);
	}

	return (
		<View style={styles.appContainer}>
			<Button title="Add new goal" onPress={startAddGoalHandler} />
			<GoalForm
				onAddGoal={addGoalHandler}
				isVisible={modalIsVisible}
				closeModal={endAddGoalHandler}
			/>
			<Text style={styles.goalsListTitle}>List of goals</Text>
			<FlatList
				alwaysBounceVertical={false}
				data={goals}
				renderItem={(renderGoalItem) => {
					return (
						<GoalItem
							id={renderGoalItem.item.id}
							text={renderGoalItem.item.text}
							onDeleteItem={deleteGoalHandler}
						/>
					);
				}}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: 80,
		paddingHorizontal: 16,
		flex: 1,
	},
	goalsListTitle: {
		marginTop: 16,
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 8,
	},
});
