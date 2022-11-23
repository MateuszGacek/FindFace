import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function ProfilName({ name }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{name}</Text>
		</View>
	);
}

export default ProfilName;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	text: {
		fontSize: 16,
	},
});
