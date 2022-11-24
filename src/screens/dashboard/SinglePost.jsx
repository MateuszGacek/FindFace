import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import Comments from '../../components/SinglePost/Comments';
import InputAddNewComment from '../../components/SinglePost/InputAddNewComment';
import PostImage from '../../components/SinglePost/PostImage';
import { addComment, getPostDetails } from '../../store/supabaseAPI';

import { useQuery } from '@tanstack/react-query';
import LoadingOverlay from '../../components/UI/LoadingOverlay';

function SinglePost({ route }) {
	const { data, isLoading, refetch } = useQuery({
		queryKey: ['postData'],
		queryFn: () => getPostDetails(route.params),
	});
	function addNewCommentHandler(comment) {
		addComment(route.params, comment);
		refetch();
	}

	if (isLoading) {
		return <LoadingOverlay message='We are downloading your post :)' />;
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<PostImage source={data.data.image_url} />
				<Text>{data.data.description}</Text>
				<Text>COMMENTS</Text>
				<Comments comments={data.data.comments} refetch={refetch} />
				<InputAddNewComment onSubmit={addNewCommentHandler} />
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 20,
	},
});

export default SinglePost;
