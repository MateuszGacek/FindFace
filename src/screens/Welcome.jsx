import React, { useContext } from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getUserId } from '../store/authContext';
import { useQuery } from '@tanstack/react-query';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { AuthContext } from '../store/authContext.js';
import {
	getLikes,
	getPostDetails,
	getPosts,
	getUserData,
} from '../store/supabaseAPI';

function Welcome() {
	const { replace } = useNavigation();
	const authContext = useContext(AuthContext);
	const { data, isLoading } = useQuery({
		queryKey: ['isAuthenticated'],
		queryFn: () => getUserId(),
	});
	if (isLoading) {
		return <LoadingOverlay message='Connecting...' />;
	}

	if (data) {
		authContext.authenticate(data);
		return replace('Main');
	}
	return (
		<View style={styles.container}>
			<Text>Welcome</Text>
			<Button title='Start your journey' onPress={() => replace('Login')} />
		</View>
	);
}

export default Welcome;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
