import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';

function ExpendedPost({ item}) {
	return (
		<Pressable
			onPress={() => {
			}}
		>
			<View style={styles.container}>
				<Text>{item.name}</Text>
				<Image
					style={styles.image}
					source={{
						uri: item.url,
					}}
				/>
				<View>
					<Text>{item.like} Likes</Text>
				</View>
				<View>
					<Text>{item.somebody}</Text>
					<Text>{item.comment.four}</Text>
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