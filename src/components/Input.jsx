import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

function Input({ label, ...props }) {
	return (
		<View>
			<Text>{label}</Text>
			<TextInput style={styles.input} {...props} />
		</View>
	);
}

export default Input;

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: 'orange',
		padding: 4,
		marginVertical: 4,
	},
});
