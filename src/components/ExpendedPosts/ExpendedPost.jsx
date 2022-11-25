import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import LoadingOverlay from '../UI/LoadingOverlay';
import { getPostAllDetails } from '../../store/getPostAllDetails';
import { checkProfileData } from '../../utilities/checkProfileData';
import Comments from '../SinglePost/Comments';
import IconButton from '../UI/IconButton';
import { deleteLikes, setLikes } from '../../store/supabaseAPI';
import { checkIsPostIsLiked } from '../../utilities/checkIsUserLikedPost';

function ExpendedPost({ item, navigation }) {
	let postId = item.item.id;
	let userId = item.item.creator_uuid;
	let lastComment;
	let commentCounts = 0;

	const [
		{ isLoading: isLoadingUserData, data: userData },
		{ isLoading: isLoadingLikesData, data: likesData },
		{ isLoading: isLoadingCommentData, data: commentsData },
	] = getPostAllDetails(postId, userId);
	const userDataCorrectly = checkProfileData(userData);

	if (isLoadingUserData || isLoadingLikesData || isLoadingCommentData) {
		return <LoadingOverlay message='Loading post data...' />;
	}
	let is = checkIsPostIsLiked(likesData.data, userId);

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

	async function likesHandler() {
		if (is) {
			await deleteLikes(is?.id);
		} else {
			await setLikes(postId);
		}
	}

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
						<IconButton
							style={styles.likesIcon}
							icon={is ? 'thumbs-up' : 'thumbs-up-outline'}
							size={24}
							onPress={likesHandler}
						/>
						<Text>{likesData.count}</Text>
					</View>
					<View style={[styles.iconBox, styles.commentsMargin]}>
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
						<Comments comments={lastComment} isDeleteButton={false} />
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
		justifyContent: 'space-evenly',
		alignItems: 'center',
		minWidth: 70,
		padding: 4,
		marginTop: 15,
	},
	likesIcon: {
		padding: 10,
	},
	commentsMargin: {
		marginLeft: 8,
	},
});
