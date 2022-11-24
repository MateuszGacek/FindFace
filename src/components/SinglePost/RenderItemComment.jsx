import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Profile from '../../screens/Profile';
import { deleteComment, getUserData } from '../../store/supabaseAPI';
import { checkProfileData } from '../../utilities/checkProfileData';
import ProfileImage from '../Profile/ProfileImage';
import IconButton from '../UI/IconButton';

function RenderItemComment({ item, refetch, data, navigation }) {
	const userCommentCreator = checkProfileData(data.data);
	function userCommentCreatorHandler() {
		navigation.navigate('OtherUsersProfile', data.data.uuid);
	}

	async function deleteCommentHandler(params) {
		await deleteComment(item.item.id);
		refetch();
	}
	return (
		<View>
			<Pressable onPress={userCommentCreatorHandler}>
				<View style={styles.userContainer}>
					<ProfileImage
						source={userCommentCreator.image_url}
						style={styles.image}
						alignItems='flex-start'
						justifyContent='flex-start'
					/>
					<View>
						<Text style={styles.text}>{userCommentCreator.first_name}</Text>
						<Text style={styles.text}>{userCommentCreator.last_name}</Text>
					</View>
				</View>
			</Pressable>
			<View style={styles.container}>
				<Text>{item.item.body}</Text>
				{refetch && (
					<IconButton
						icon='trash-outline'
						color='#333'
						size={24}
						onPress={() => {
							deleteComment(item.item.id);
							refetch();
						}}
					/>
				)}
			</View>
		</View>
	);
}

export default RenderItemComment;

const styles = StyleSheet.create({
	container: {
		marginVertical: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		borderRadius: 8,
		padding: 8,
	},
	userContainer: {
		flexDirection: 'row',
	},
	image: {
		width: 40,
		height: 40,
	},
	text: {
		marginLeft: 10,
	},
});
