import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Button, Text } from 'react-native';
import ExpendedPosts from '../../components/ExpendedPosts/ExpendedPosts';
import { AuthContext } from '../../store/authContext';
import { useQuery } from '@tanstack/react-query';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import { getPosts } from '../../store/supabaseAPI';

function Home() {
	const navigation = useNavigation();
	const authContext = useContext(AuthContext);
	const { data, isLoading } = useQuery({
		queryKey: ['postsData'],
		queryFn: getPosts,
	});

	if (isLoading) {
		return <LoadingOverlay message='Loading...' />;
	}
	function logoutHandler() {
		authContext.logout();
		navigation.navigate('Auth', { screen: 'Login' });
	}
	return (
		<>
			<Text>Home</Text>
			<Button title='logout' onPress={logoutHandler} />
			<ExpendedPosts navigation={navigation} data={data.data} />
		</>
	);
}

export default Home;
