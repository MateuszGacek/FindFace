import { Image, StyleSheet } from 'react-native';

const AvatarStories = () => {
	return (
		<Image
			style={styles.image}
			source={{
				uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91YU5JbQOeiN2Ao3d64TMUPTatpUnCpKL_2vzLD-IKlW6tEz9ThhkDuPTpeN4eg81bcc&usqp=CAU',
			}}
		/>
	);
};

export default AvatarStories;

const styles = StyleSheet.create({
	image: {
		width: 60,
		height: 60,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: 'pink',
	},
});
