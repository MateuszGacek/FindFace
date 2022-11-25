import React from 'react';
// import Input from './Input';
import { useForm, Controller } from 'react-hook-form';
import { Button, View, Text, StyleSheet } from 'react-native';
import Input from './Input';
import { yupResolver } from '@hookform/resolvers/yup';
import OutlinedButton from './UI/OutlinedButton';
function AuthForm({ onSubmit, validation, isRegister }) {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validation),
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	return (
		<View>
			<Controller
				control={control}
				name='email'
				render={({ field: { onChange, onBlur, value } }) => (
					<Input
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						label='email'
						autoCapitalize='none'
					/>
				)}
			/>
			{errors.email && (
				<Text style={styles.textErrorColor}>{errors.email.message}</Text>
			)}
			<Controller
				control={control}
				name='password'
				render={({ field: { onChange, onBlur, value } }) => (
					<Input
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						secureTextEntry
						label='password'
						autoCapitalize='none'
					/>
				)}
			/>
			{errors.password && (
				<Text style={styles.textErrorColor}>{errors.password.message}</Text>
			)}
			{isRegister && (
				<Controller
					control={control}
					name='confirmPassword'
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							secureTextEntry
							label='confirmPassword'
							autoCapitalize='none'
						/>
					)}
				/>
			)}
			{errors.confirmPassword && isRegister && (
				<Text style={styles.textErrorColor}>
					{errors.confirmPassword.message}
				</Text>
			)}
			<OutlinedButton
				icon={isRegister ? 'add' : 'log-in-outline'}
				onPress={handleSubmit(onSubmit)}
			>
				{isRegister ? 'Register' : 'Login'}
			</OutlinedButton>
		</View>
	);
}

export default AuthForm;

const styles = StyleSheet.create({
	textErrorColor: {
		color: 'red',
	},
});
