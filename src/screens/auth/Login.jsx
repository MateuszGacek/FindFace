import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Login() {
	const { replace } = useNavigation();
	return (
		<View style={styles.container}>
			<Text>Login</Text>
			<Button title='Register' onPress={() => replace('Register')} />
			<Button title='LoginIsTrue' onPress={() => replace('Main')} />
		</View>
	);
}

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
