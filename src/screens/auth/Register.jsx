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
			<Button
				title='getToken'
				onPress={() => {
					getToken('token');
				}}
			/>
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

const a = {
	session: {
		access_token:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjY5MDM2MTMyLCJzdWIiOiI5NWQxYzViZS1mOGY5LTQyOWMtOGRkYi0zYWQ0NjRlZjc1NDIiLCJlbWFpbCI6Im1nQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsInNlc3Npb25faWQiOiJjNmI2ZGI2MC0yNjUxLTQ0NGMtYjZkNC1mODRkZTY3MmI1N2EifQ.J6Vjqewo6i5RZxrGL4svx98i2NV79m2Du743cirieog',
		expires_at: 1669036133,
		expires_in: 3600,
		refresh_token: 'ddQjsvVRT66y470w41JDUw',
		token_type: 'bearer',
		user: {
			app_metadata: [Object],
			aud: 'authenticated',
			confirmed_at: '2022-11-21T12:06:40.462224Z',
			created_at: '2022-11-21T12:06:40.457847Z',
			email: 'mg@gmail.com',
			email_confirmed_at: '2022-11-21T12:06:40.462224Z',
			id: '95d1c5be-f8f9-429c-8ddb-3ad464ef7542',
			identities: [Array],
			last_sign_in_at: '2022-11-21T12:08:52.879182727Z',
			phone: '',
			role: 'authenticated',
			updated_at: '2022-11-21T12:08:52.880996Z',
			user_metadata: [Object],
		},
	},
	user: {
		app_metadata: { provider: 'email', providers: [Array] },
		aud: 'authenticated',
		confirmed_at: '2022-11-21T12:06:40.462224Z',
		created_at: '2022-11-21T12:06:40.457847Z',
		email: 'mg@gmail.com',
		email_confirmed_at: '2022-11-21T12:06:40.462224Z',
		id: '95d1c5be-f8f9-429c-8ddb-3ad464ef7542',
		identities: [[Object]],
		last_sign_in_at: '2022-11-21T12:08:52.879182727Z',
		phone: '',
		role: 'authenticated',
		updated_at: '2022-11-21T12:08:52.880996Z',
		user_metadata: {},
	},
};
