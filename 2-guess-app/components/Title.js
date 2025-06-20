import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Title({ children }) {
	return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: Colors.title,
		textAlign: "center",
		padding: 18,
		borderColor: Colors.title,
		borderWidth: 2,
		margin: 20,
	},
});
