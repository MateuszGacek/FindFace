import React, { useContext } from 'react';
import { Button, Text, StyleSheet, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthForm from '../../components/AuthForm.jsx';
import { getToken } from '../../store/authContext.js';
import { register } from '../../store/supabaseAPI.js';
import { useCallback } from 'react';

function Register() {
	const { replace } = useNavigation();

	const registerHandler = useCallback((values) => {
		async function registerHelper() {
			const data = await register(values.email, values.password);
			console.log(data);
			// if (data.session === null) {
			// 	Alert.alert('User already exists', 'Try to login :)');
			// } else {
			// 	replace('Login');
			// }
		}
		registerHelper();
	}, []);

	return (
		<View style={styles.container}>
			<Text>Register</Text>
			<Button title='ToLogin' onPress={() => replace('Login')} />
			<AuthForm onSubmit={registerHandler} />
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
