import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

export default function Comments({ comments }) {
	console.log(comments);
	return (
		<View>
			<FlatList
				style={styles.listHeight}
				data={comments}
				renderItem={({ item }) => {
					return <Text style={styles.border}>{item.body}</Text>;
				}}
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
