import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function PostImage({ source }) {
	console.log(source);
	return (
		<View>
			<Image
				style={style.image}
				source={{
					uri: source,
				}}
			/>
		</View>
	);
}

export default PostImage;

const style = StyleSheet.create({
	image: {
		width: '100%',
		height: 300,
	},
});
