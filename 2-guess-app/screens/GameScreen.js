import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
	const randomValue = Math.floor(Math.random() * (max - min)) + min;

	if (randomValue === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return randomValue;
	}
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	function nextGuessHandler(direction) {
		if (
			(direction === "lower" && currentGuess < userNumber) ||
			(direction === "higher" && currentGuess > userNumber)
		) {
			Alert.alert("Don't lie!", "You know that is wrong...", [
				{
					text: "Sorry!",
					style: "calcel",
				},
			]);
			return;
		}

		if (direction === "lower") {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}
		const newRandomNumber = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		setCurrentGuess(newRandomNumber);
	}

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver();
		}
	}, [currentGuess, userNumber, onGameOver]);

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher or lower?</Text>
				<View>
					<PrimaryButton
						onPress={nextGuessHandler.bind(this, "higher")}
					>
						+
					</PrimaryButton>
					<PrimaryButton
						onPress={nextGuessHandler.bind(this, "lower")}
					>
						-
					</PrimaryButton>
				</View>
			</View>
			<View>Log rounds</View>
		</View>
	);
}

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 12,
	},
});
