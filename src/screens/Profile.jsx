import React, { useContext, useState, useMemo } from 'react';
import { StyleSheet, View, Switch, Button } from 'react-native';
import { AuthContext } from '../store/authContext';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ProfileImage from '../components/Profile/ProfileImage';
import { checkProfileData } from '../utilities/checkProfileData';
import ProfilName from '../components/Profile/ProfilName';
import ProfilePosts from '../components/Profile/ProfilePosts';
import { useNavigation } from '@react-navigation/native';
import ExpendedPosts from '../components/ExpendedPosts/ExpendedPosts';
import { postsAndUserData } from '../store/postsAndUserData';
import IconButton from '../components/UI/IconButton';

function Profile({ route }) {
	const [expendedPostIsEnable, setExpendedPostIsEnable] = useState(false);
	const authContext = useContext(AuthContext);
	const navigation = useNavigation();

	const [
		{ isLoading: isLoadingUserData, data: user },
		{ isLoading: isLoadingexpendedPostsData, data: expendedPostsData },
	] = postsAndUserData(route.params, authContext.userId);

	const pageContext = useMemo(() => {
		if (route.params) {
			return (
				<Switch
					trackColor={{ false: '#767577', true: '#81b0ff' }}
					thumbColor={'#f4f3f4'}
					ios_backgroundColor='#3e3e3e'
					onValueChange={expendedPostIsEnableHandler}
					value={expendedPostIsEnable}
				/>
			);
		}
	}, [route.params, expendedPostIsEnable]);

	if (isLoadingUserData || isLoadingexpendedPostsData) {
		return <LoadingOverlay message='Loading...' />;
	}
	function expendedPostIsEnableHandler() {
		setExpendedPostIsEnable(!expendedPostIsEnable);
	}
	function logoutHandler() {
		authContext.logout();
		navigation.navigate('Auth', { screen: 'Login' });
	}

	const userData = checkProfileData(user.data);

	return (
		<View style={styles.container}>
			<View style={styles.iconPosition}>
				{!route.params && (
					<IconButton icon='power-outline' onPress={logoutHandler} size={40} />
				)}
			</View>

			<ProfileImage source={userData.image_url} />
			<ProfilName name={route.params ? userData.first_name : 'ME'} />
			<View style={styles.postsContainer}>
				{pageContext}
				{expendedPostIsEnable ? (
					<ExpendedPosts
						navigation={navigation}
						data={expendedPostsData.data}
					/>
				) : (
					<ProfilePosts navigation={navigation} />
				)}
			</View>
		</View>
	);
}

export default Profile;

const styles = StyleSheet.create({
	iconPosition: {
		position: 'absolute',
		top: 30,
		right: 40,
	},
	container: {
		paddingTop: 60,
	},
	postsContainer: {
		maxHeight: '78%',
	},
});
