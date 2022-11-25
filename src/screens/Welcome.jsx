import React, { useContext, useState, useEffect } from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getUserId } from '../store/authContext';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { AuthContext } from '../store/authContext.js';

function Welcome() {
	const { replace } = useNavigation();
	const authContext = useContext(AuthContext);

	const [isLoading, setIsLoading] = useState(true);
	let data;

	useEffect(() => {
		const dataFetch = async () => {
			data = await getUserId();
			setIsLoading(false);
			if (data) {
				authContext.authenticate(data);
				return replace('Main');
			}
		};

		dataFetch();
	}, [data]);

	if (isLoading) {
		return <LoadingOverlay message='Connecting...' />;
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
