import React from 'react';
import ExpendedPost from './ExpendedPost';
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';
import { postData } from '../../store/DUMMY/postData';

function ExpendedPosts({ navigation }) {
	const posts = postData.data;
	const name = 'MATEUSZ';

	return (
		<View style={styles.container}>
			<FlatList
				data={posts}
				renderItem={(item) => {
					return ExpendedPost(item, navigation);
				}}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

export default ExpendedPosts;

const styles = StyleSheet.create({
	container: {
		height: '100%',
		paddingBottom: 30,
	},
});
