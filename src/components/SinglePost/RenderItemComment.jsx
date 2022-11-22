import React from 'react';
import { Button, Text, View } from 'react-native';
import { deleteComment } from '../../store/supabaseAPI';

function RenderItemComment({ item }, refetch) {
	return (
		<View>
			<Text>{item.body}</Text>
			<Button
				title='delete'
				onPress={() => {
					deleteComment(item.id);
					refetch();
				}}
			/>
		</View>
	);
}

export default RenderItemComment;
