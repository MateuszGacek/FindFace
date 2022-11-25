import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, color, size, onPress, style }) {
	return (
		<Pressable
			style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
			onPress={onPress}
		>
			<Ionicons name={icon} color={color} size={size} />
		</Pressable>
	);
}

export default IconButton;

const styles = StyleSheet.create({
	button: {
		borderRadius: 20,
	},
	pressed: {
		opacity: 0.7,
	},
});
