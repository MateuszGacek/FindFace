import React, { useCallback, useContext } from 'react';
import {
	Text,
	StyleSheet,
	View,
	Alert,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../store/authContext';
import { login } from '../../store/supabaseAPI';
import AuthForm from '../../components/AuthForm';
import FlatButton from '../../components/UI/FlatButton';
import { loginValidation } from '../../utilities/authFormValidation';

function Login() {
	const { replace } = useNavigation();
	const authContext = useContext(AuthContext);

	const loginHandler = useCallback((values) => {
		async function loginHelper() {
			const data = await login(values.email, values.password);

			if (data.message === 'Invalid login credentials') {
				Alert.alert('Wrong login or password', 'Please try again');
			} else {
				authContext.authenticate(data.user.id);
				replace('Main');
			}
		}
		loginHelper();
	}, []);

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<View style={styles.formBox}>
					<Text style={styles.title}>Login</Text>
					<AuthForm onSubmit={loginHandler} validation={loginValidation} />
					<FlatButton onPress={() => replace('Register')}>
						Create a new user
					</FlatButton>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

export default Login;

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
