import React from 'react';
import ExpendedPost from './ExpendedPost';
import { FlatList, Text } from 'react-native';
import { postData } from '../../store/DUMMY/postData';

function ExpendedPosts() {
	const posts = postData;
	<Text>asda</Text>;
	return (
		<>
			<FlatList
				data={posts}
				renderItem={ExpendedPost}
				keyExtractor={(item) => item.id}
			/>
		</>
	);
}

export default ExpendedPosts;
