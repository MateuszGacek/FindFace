import React from 'react';
import ExpendedPost from './ExpendedPost';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { postData } from '../../store/DUMMY/postData';
import { useNavigation } from '@react-navigation/native';

function ExpendedPosts() {
	const posts = postData;
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<FlatList
				data={posts}
				renderItem={ExpendedPost}
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
