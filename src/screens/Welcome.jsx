import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Welcome() {
	const { replace } = useNavigation();
	return (
		<View style={styles.container}>
			<Text>Welcome</Text>
			<Button title='Start your journey' onPress={() => replace('Login')} />
		</View>
	);
}

export default Welcome;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
