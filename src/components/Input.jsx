import React from 'react';
import { TextInput, View, Text } from 'react-native';

function Input({ label, ...props }) {
	return (
		<View>
			<Text>{label}</Text>
			<TextInput {...props} />
		</View>
	);
}

export default Input;
