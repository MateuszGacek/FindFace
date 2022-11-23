import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import { getLikes } from '../../store/supabaseAPI';

function ExpendedPost({ item, navigation }) {
	function postPressHandler() {
		navigation.navigate('SinglePost', item.item.id);
	}

	return (
		<Pressable
			onPress={() => {
				postPressHandler();
			}}
		>
			<View style={styles.container}>
				<Text>
					NIE CHCE POBIERAC TUTAJ NAME, MNIEJ REQUESTOW ;D{item.item.creator_uuid}
				</Text>
				<Image
					style={styles.image}
					source={{
						uri: item.item.image_url,
					}}
				/>
				<View>
					<Text>{item.item.description}</Text>
				</View>
			</View>
		</Pressable>
	);
}

export default ExpendedPost;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: 'red',
		margin: 20,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
	},
	image: {
		width: '100%',
		height: 200,
	},
});
