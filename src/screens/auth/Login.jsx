import React, { useCallback, useContext } from 'react';
import { Button, Text, StyleSheet, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../store/authContext';
import { login } from '../../store/supabaseAPI';
import AuthForm from '../../components/AuthForm';

function Login() {
	const { replace } = useNavigation();
	const authContext = useContext(AuthContext);

	const loginHandler = useCallback((values) => {
		async function loginHelper() {
			const data = await login(values.email, values.password);
			console.log(data);
			// if (data.user.aud === 'authenticated') {
			// 	const token = data.session.access_token;
			// 	console.log(token);
			// 	console.log('logged!');
			// } else {
			// 	Alert.alert('Wrong login or password', 'Please try again');
			// }
			replace('Main');
		}
		loginHelper();
	}, []);

	return (
		<View style={styles.container}>
			<Text>Login</Text>
			<Button title='ToRegister' onPress={() => replace('Register')} />
			<AuthForm onSubmit={loginHandler} />
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
