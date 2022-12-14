import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import LoadingOverlay from '../UI/LoadingOverlay';
import { getPosts } from '../../store/supabaseAPI';
import { useQuery } from '@tanstack/react-query';
import { RenderSimplePostsList } from './RenderSimplePostsList';

function ProfilePosts({ navigation }) {
	const { data, isLoading } = useQuery({
		queryKey: ['postsData'],
		queryFn: getPosts,
	});

	if (isLoading) {
		return <LoadingOverlay message='Loading...' />;
	}
	return (
		<View style={styles.container}>
			<FlatList
				numColumns={3}
				data={data.data}
				renderItem={(item) => {
					return <RenderSimplePostsList item={item} navigation={navigation} />;
				}}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

export default ProfilePosts;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
});

RenderSimplePostsList;
