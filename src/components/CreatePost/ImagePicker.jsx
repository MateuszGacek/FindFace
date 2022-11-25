import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { launchCameraAsync } from 'expo-image-picker';
import OutlinedButton from '../UI/OutlinedButton';
import { decode } from 'base64-arraybuffer';

function ImagePicker() {
	const [pickedImage, setPickedImage] = useState('');

	let imagePreview = <Text>No image taken yet.</Text>;
	if (pickedImage) {
		imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
	}
	async function takeImageHandlaer() {
		const image = await launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 0.25,
		});
		setPickedImage(image.assets[0].uri);
		console.log(image.assets[0].uri);
	}
	return (
		<View>
			<Text style={styles.title}>Create your own post</Text>
			<View style={styles.imageContainer}>{imagePreview}</View>
			<View style={styles.buttonContainer}>
				<OutlinedButton icon='camera-outline' onPress={takeImageHandlaer}>
					Take picture
				</OutlinedButton>
			</View>
		</View>
	);
}

export default ImagePicker;

const styles = StyleSheet.create({
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 36,
		textAlign: 'center',
		marginTop: 35,
	},
	imageContainer: {
		marginVertical: 35,
		marginHorizontal: 20,
		height: 200,
		backgroundColor: '#B4B4B4',
		borderRadius: 8,
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: '100%',
	},
});
