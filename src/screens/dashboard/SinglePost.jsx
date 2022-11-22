import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import Comments from '../../components/SinglePost/Comments';
import Likes from '../../components/SinglePost/Likes';
import PostImage from '../../components/SinglePost/PostImage';
import SmallAvatar from '../../components/SinglePost/SmallAvatar';
import Title from '../../components/SinglePost/Title';
import InputComment from '../../components/UI/InputComment';
import { getPostDetails } from '../../store/supabaseAPI';
import { getSinglePostById } from '../../utilities/getSinglePostById';

function SinglePost({ route }) {
	const [postDetails, setPostDetails] = useState(null);

	useEffect(() => {
		let mounted = true;
		getPostDetails(route.params).then((items) => {
			if (mounted) {
				setPostDetails(items);
			}
		});
		return () => (mounted = false);
	}, []);
	if (postDetails === null) {
		return <Text>Loading...</Text>;
	}

	return (
		<ScrollView style={styles.container}>
			<PostImage source={postDetails.data.image_url} />
			<Text>{postDetails.data.description}</Text>
			<Text>COMMENTS</Text>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 20,
	},
});

export default SinglePost;
