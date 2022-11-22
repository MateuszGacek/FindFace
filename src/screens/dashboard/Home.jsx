import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Button, Text } from 'react-native';
import ExpendedPosts from '../../components/ExpendedPosts/ExpendedPosts';
import { AuthContext } from '../../store/authContext';

function Home() {
	const navigation = useNavigation();
	const authContext = useContext(AuthContext);
	function logoutHandler() {
		authContext.logout();
		navigation.navigate('Auth', { screen: 'Login' });
	}
	return (
		<>
				<Text>Home</Text>
				<Button title='logout' onPress={logoutHandler} />
				<ExpendedPosts navigation={navigation} />
		</>
	);
}

export default Home;
