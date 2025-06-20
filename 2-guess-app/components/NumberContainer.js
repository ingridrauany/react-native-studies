import { View, Text, StyleSheet } from "react-native";

function NumberContainer({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
}

export default NumberContainer;

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: "#72063c",
		padding: 24,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	numberText: {
		color: "#72063c",
		fontSize: 36,
		fontWeight: "bold",
	},
});
