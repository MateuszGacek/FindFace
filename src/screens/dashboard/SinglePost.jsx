import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Text, Button } from 'react-native';
import Comments from '../../components/SinglePost/Comments';
import InputAddNewComment from '../../components/SinglePost/InputAddNewComment';
import Likes from '../../components/SinglePost/Likes';
import PostImage from '../../components/SinglePost/PostImage';
import SmallAvatar from '../../components/SinglePost/SmallAvatar';
import Title from '../../components/SinglePost/Title';
import InputComment from '../../components/UI/InputComment';
import { addComment, getPostDetails } from '../../store/supabaseAPI';
import { getSinglePostById } from '../../utilities/getSinglePostById';

function SinglePost({ route }) {
	const [postDetails, setPostDetails] = useState(null);
	const [mounted, setMounted] = useState(true);

	useEffect(() => {
		setMounted(true);
		getPostDetails(route.params).then((items) => {
			if (mounted) {
				setPostDetails(items);
			}
		});
		return setMounted(!mounted);
	}, []);
	function addNewCommentHandler(comment) {
		addComment(route.params, comment);
		setMounted(!mounted);
	}

	if (postDetails === null) {
		return <Text>Loading...</Text>;
	}

	return (
		<View style={styles.container}>
			<PostImage source={postDetails.data.image_url} />
			<Text>{postDetails.data.description}</Text>
			<Text>COMMENTS</Text>
			<Comments comments={postDetails.data.comments} />
			<InputAddNewComment onSubmit={addNewCommentHandler} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 20,
	},
});

export default SinglePost;
