import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet } from 'react-native';

export function RenderSimplePostsList({ item }, navigation) {
	function postPressHandler() {
		navigation.navigate('SinglePost', item.id);
	}
	return (
		<Pressable onPress={postPressHandler}>
			<Image
				style={styles.image}
				source={{
					uri: item.image_url,
				}}
			/>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 100,
		height: 100,
		margin: 10,
		borderRadius: 8,
	},
});
