import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import { getLikes, getPostDetails } from '../../store/supabaseAPI';
import { useQuery } from '@tanstack/react-query';
import LoadingOverlay from '../UI/LoadingOverlay';
import { getPostAllDetails } from '../../store/getPostAllDetails';
import { checkProfileData } from '../../utilities/checkProfileData';
import Comments from '../SinglePost/Comments';
import IconButton from '../UI/IconButton';

function ExpendedPost({ item, navigation }) {
	let postId = item.item.id;
	let userId = item.item.creator_uuid;
	function postPressHandler() {
		navigation.navigate('SinglePost', item.item.id);
	}

	const [
		{ isLoading: isLoadingUserData, data: userData },
		{ isLoading: isLoadingLikesData, data: likesData, error },
		{ isLoading: isLoadingCommentData, data: commentsData },
	] = getPostAllDetails(131, userId);

	if (isLoadingUserData || isLoadingLikesData || isLoadingCommentData) {
		return <LoadingOverlay message='Loading post data...' />;
	}
	let lastComment;
	let commentCounts = 0;
	console.log(likesData.count);

	if (commentsData.data !== null) {
		if (commentsData.data.comments.length === 0) {
			lastComment = false;
		} else {
			commentCounts = commentsData.data.comments.length;
			lastComment = commentsData.data.comments.slice(-1);
		}
	} else {
		lastComment = false;
	}

	const userDataCorrectly = checkProfileData(userData);

	return (
		<Pressable
			onPress={() => {
				postPressHandler();
			}}
		>
			<View style={styles.container}>
				<Text style={styles.textCreator}>
					Created by: {userDataCorrectly.first_name}
				</Text>
				<Image
					style={styles.image}
					source={{
						uri: item.item.image_url,
					}}
				/>
				<View style={styles.iconsContainer}>
					<View style={[styles.iconBox, styles.likesBorder]}>
						<IconButton icon='thumbs-up-outline' size={24} />
						<Text>{likesData.count}</Text>
					</View>
					<View style={[styles.iconBox, styles.commentsBorder]}>
						<IconButton icon='chatbubble-ellipses-outline' size={24} />
						<Text>{commentCounts}</Text>
					</View>
				</View>
				<View>
					<Text style={styles.textDescription}>{item.item.description}</Text>
				</View>
				{lastComment && (
					<View>
						<Text>Last comment:</Text>
						<Comments comments={lastComment} />
					</View>
				)}
			</View>
		</Pressable>
	);
}

export default ExpendedPost;

const styles = StyleSheet.create({
	textCreator: {
		fontSize: 16,
		marginBottom: 4,
	},
	textDescription: {
		fontSize: 14,
		marginVertical: 16,
	},
	container: {
		padding: 10,
		margin: 20,
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 8,
	},
	image: {
		width: '100%',
		height: 200,
	},
	iconsContainer: {
		flexDirection: 'row',
	},
	iconBox: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		minWidth: 70,
		padding: 4,
		marginTop: 15,
		borderWidth: 1,
		borderRadius: 8,
	},
	likesBorder: {
		borderColor: 'red',
	},
	commentsBorder: {
		borderColor: 'blue',
		marginLeft: 8,
	},
});
