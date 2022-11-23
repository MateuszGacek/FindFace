import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function ProfileImage({ source }) {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={{
					uri: source,
				}}
			/>
		</View>
	);
}

export default ProfileImage;

const styles = StyleSheet.create({
	container: {
		marginTop: 70,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 130,
		height: 130,
		borderRadius: 150,
	},
});
