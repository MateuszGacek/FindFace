import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import RenderItemComment from './RenderItemComment';

export default function Comments({ comments, refetch }) {
	return (
		<View>
			<FlatList
				style={styles.listHeight}
				data={comments}
				renderItem={(item)=>RenderItemComment(item,refetch)}
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
	border: {
		borderColor: 'red',
		borderWidth: 2,
		padding: 6,
		margin: 4,
	},
});
