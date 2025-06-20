import { SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useState } from "react";
import Colors from "./constants/colors";

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [gameIsOver, setGameIsOver] = useState(false);

	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber);
		setGameIsOver(false);
	}

	function gameOverHandler() {
		setGameIsOver(true);
	}

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
		);
	}

	if (gameIsOver) {
		screen = <GameOverScreen />;
	}

	return <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>;
}

const styles = {
	rootScreen: {
		flex: 1,
		backgroundColor: Colors.background,
	},
};
