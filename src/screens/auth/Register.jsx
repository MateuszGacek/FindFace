import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Register() {
	const { replace } = useNavigation();
	return (
		<View style={styles.container}>
			<Text>Register</Text>
			<Button title='Login' onPress={() => replace('Login')} />
		</View>
	);
}

export default Register;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
