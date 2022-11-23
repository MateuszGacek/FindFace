import React, { useContext, useState } from 'react';
import { StyleSheet, View, Switch, Text } from 'react-native';
import { AuthContext } from '../store/authContext';
import { getUserData, getPosts } from '../store/supabaseAPI';
import { useQuery } from '@tanstack/react-query';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ProfileImage from '../components/Profile/ProfileImage';
import { checkProfileData } from '../utilities/checkProfileData';
import ProfilName from '../components/Profile/ProfilName';
import ProfilePosts from '../components/Profile/ProfilePosts';
import { useNavigation } from '@react-navigation/native';
import ExpendedPosts from '../components/ExpendedPosts/ExpendedPosts';

function Profile({ route }) {
	const [expendedPostIsEnable, setExpendedPostIsEnable] = useState(false);
	const authContext = useContext(AuthContext);
	const navigation = useNavigation();

	const queryMultiple = () => {
		const userResponse = useQuery({
			queryKey: ['userData'],
			queryFn: () => getUserData(route.params || authContext.userId),
		});
		const postsResponse = useQuery({
			queryKey: ['postsData'],
			queryFn: getPosts,
		});
		return [userResponse, postsResponse];
	};

	const [
		{ isLoading: loading1, data: user },
		{ isLoading: loading2, data: expendedPostData },
	] = queryMultiple();

	const { data, isLoading } = useQuery({
		queryKey: ['userData'],
		queryFn: () => getUserData(route.params || authContext.userId),
	});
	if (loading1) {
		return <LoadingOverlay message='Loading...' />;
	}
	function expendedPostIsEnableHandler() {
		setExpendedPostIsEnable(!expendedPostIsEnable);
	}
	function pageContext() {
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
	}
	const userData = checkProfileData(user.data);

	return (
		<View style={styles.container}>
			<ProfileImage source={userData.image_url} />
			<ProfilName name={route.params ? userData.first_name : 'ME'} />
			<View style={styles.postsContainer}>
				{pageContext()}
				{!expendedPostIsEnable && <ProfilePosts navigation={navigation} />}
				{expendedPostIsEnable && (
					<ExpendedPosts navigation={navigation} data={expendedPostData.data} />
				)}
			</View>
		</View>
	);
}

export default Profile;

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
	},
	postsContainer: {
		maxHeight: '78%',
	},
});
