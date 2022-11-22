import React from 'react';
import ExpendedPost from './ExpendedPost';
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../../store/supabaseAPI';

function ExpendedPosts({ navigation }) {
	const { data, isLoading } = useQuery({
		queryKey: ['postsData'],
		queryFn: getPosts,
	});

	if (isLoading) {
		return <Text>Loading...</Text>;
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={data.data}
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
