import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ExpendedPosts from '../../components/ExpendedPosts/ExpendedPosts';
import { useQuery } from '@tanstack/react-query';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import { getPosts } from '../../store/supabaseAPI';
import AvatarStories from '../../components/CreatePost/AvatarStories';

function Home() {
	const navigation = useNavigation();
	const { data, isLoading } = useQuery({
		queryKey: ['postsData'],
		queryFn: getPosts,
	});

	if (isLoading) {
		return <LoadingOverlay message='Loading...' />;
	}
	return (
		<>
			<View style={styles.avatarsList}>
				<AvatarStories />
				<AvatarStories />
				<AvatarStories />
				<AvatarStories />
				<AvatarStories />
			</View>
			<ExpendedPosts navigation={navigation} data={data.data} />
		</>
	);
}

export default Home;

const styles = StyleSheet.create({
	avatarsList: {
		marginHorizontal: 20,
		marginTop: 45,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
