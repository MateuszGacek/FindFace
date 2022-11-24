import React from 'react';
import ExpendedPost from './ExpendedPost';
import { FlatList, View, StyleSheet } from 'react-native';

function ExpendedPosts({ navigation, data }) {
	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={(item) => {
					return <ExpendedPost item={item} navigation={navigation} />;
				}}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

export default ExpendedPosts;

const styles = StyleSheet.create({
	container: {
		height: '100%',
		paddingBottom: 30,
	},
});
