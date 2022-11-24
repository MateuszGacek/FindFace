import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function OutlinedButton({ children, onPress, icon }) {
	return (
		<Pressable
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
			onPress={onPress}
		>
			<Ionicons style={styles.icon} name={icon} size={24} color='black' />
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	);
}

export default OutlinedButton;

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 14,
		paddingVertical: 6,
		margin: 4,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'black',
		minWidth: 160,
		borderRadius: 8,
	},
	pressed: {
		opacity: 0.5,
	},
	icon: {
		marginRight: 6,
	},
	text: {
		color: 'black',
	},
});
