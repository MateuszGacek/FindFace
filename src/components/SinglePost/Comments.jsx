import React, { useContext } from 'react';
import { FlatList,  View, StyleSheet } from 'react-native';
import RenderItemComment from './RenderItemComment';
import { useQuery } from '@tanstack/react-query';
import { getUserData } from '../../store/supabaseAPI';
import LoadingOverlay from '../UI/LoadingOverlay';
import { AuthContext } from '../../store/authContext';
import { useNavigation } from '@react-navigation/native';

export default function Comments({ comments, refetch }) {
	const authContext = useContext(AuthContext);
	const navigation = useNavigation();
	const { data, isLoading } = useQuery({
		queryKey: ['userCommentCreator', authContext.userId],
		queryFn: () => getUserData(authContext.userId),
	});
	if (isLoading) {
		return <LoadingOverlay message='Loading post...' />;
	}
	return (
		<View>
			<FlatList
				style={styles.listHeight}
				data={comments}
				renderItem={(item) => (
					<RenderItemComment
						item={item}
						refetch={refetch}
						data={data}
						navigation={navigation}
					/>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	listHeight: {
		maxHeight: 250,
		marginBottom: 25,
	},
});
