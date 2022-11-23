import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { AuthContext } from '../store/authContext';
import { getUserData } from '../store/supabaseAPI';
import { useQuery } from '@tanstack/react-query';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ProfileImage from '../components/Profile/ProfileImage';
import { checkProfileData } from '../utilities/checkProfileData';
import ProfilName from '../components/Profile/ProfilName';
import ProfilePosts from '../components/Profile/ProfilePosts';
import { useNavigation } from '@react-navigation/native';

function Profile({ otherUser }) {
	const authContext = useContext(AuthContext);
	const navigation = useNavigation();
	const { data, isLoading } = useQuery({
		queryKey: ['userData'],
		queryFn: () => getUserData(authContext.userId),
	});
	if (isLoading) {
		return <LoadingOverlay message='Loading...' />;
	}
	const userData = checkProfileData(data.data);
	if (otherUser) {
		console.log('OTHER');
	} else {
		console.log(userData);
	}

	return (
		<View>
			<ProfileImage source={userData.image_url} />
			<ProfilName name={userData.first_name} />
			<ProfilePosts navigation={navigation} />
		</View>
	);
}

export default Profile;
