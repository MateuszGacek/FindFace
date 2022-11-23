import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function ProfileImage({
	source,
	style,
	justifyContent = 'center',
	alignItems = 'center',
}) {
	return (
		<View
			style={{
				justifyContent: justifyContent,
				alignItems: alignItems,
			}}
		>
			<Image
				style={[styles.image, style]}
				source={{
					uri: source,
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 130,
		height: 130,
		borderRadius: 150,
	},
});

export default ProfileImage;
