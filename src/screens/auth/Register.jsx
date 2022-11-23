import React, { useContext } from 'react';
import {
	Text,
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthForm from '../../components/AuthForm.jsx';
import { register } from '../../store/supabaseAPI.js';
import { useCallback } from 'react';
import FlatButton from '../../components/UI/FlatButton.jsx';

function Register() {
	const { replace } = useNavigation();

	const registerHandler = useCallback((values) => {
		async function registerHelper() {
			const data = await register(values.email, values.password);
			if (
				data.message === 'Signup requires a valid password' ||
				data.message === 'Password should be at least 6 characters'
			) {
				Alert.alert('User already exists', 'Try to login :)');
			} else {
				replace('Login');
			}
		}
		registerHelper();
	}, []);

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<View style={styles.formBox}>
					<Text style={styles.title}>Register</Text>
					<AuthForm onSubmit={registerHandler} />
					<FlatButton onPress={() => replace('Login')}>
						Log in instead
					</FlatButton>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

export default Register;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	formBox: {
		backgroundColor: 'gold',
		padding: 50,
		borderRadius: 12,
		minWidth: '70%',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,

		elevation: 8,
	},
	title: {
		textAlign: 'center',
		fontSize: 28,
		color: 'red',
	},
});
