import React from 'react';
// import Input from './Input';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button, Text, View } from 'react-native';
import { useCallback } from 'react';
import Input from './Input';
function AuthForm({ onSubmit }) {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
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
			<Button title='Submit' onPress={handleSubmit(onSubmit)} />
		</View>
	);
}

export default AuthForm;
