import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Comments from '../../components/SinglePost/Comments';
import Likes from '../../components/SinglePost/Likes';
import PostImage from '../../components/SinglePost/PostImage';
import SmallAvatar from '../../components/SinglePost/SmallAvatar';
import Title from '../../components/SinglePost/Title';
import InputComment from '../../components/UI/InputComment';
import { getSinglePostById } from '../../utilities/getSinglePostById';

function SinglePost() {
	const id = 2;
	const postData = getSinglePostById(id);
	return (
		<ScrollView style={styles.container}>
			<PostImage source={postData.url} />
			<View>
				<SmallAvatar />
				<View>
					<Likes />
					<Title />
				</View>
			</View>
			<Comments />
			<InputComment />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 20,
	},
});

export default SinglePost;
