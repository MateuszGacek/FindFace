import React from 'react';
import { TextInput, View, Text } from 'react-native';

function Input({ label, onBlur, onChange, value }) {
	return (
		<View>
			<Text>{label}</Text>
			<TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
		</View>
	);
}

export default Input;
