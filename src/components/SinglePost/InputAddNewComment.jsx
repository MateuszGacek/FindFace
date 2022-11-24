import React, { useState } from 'react';
import { View,  StyleSheet, TextInput, Button, Alert } from 'react-native';

function InputAddNewComment({ onSubmit }) {
	const [newComment, setNewComment] = useState('');
	function newCommentHandler(e) {
		setNewComment(e);
	}
	function addNewCommentHandler() {
		if (newComment.length <= 0) {
			return Alert.alert('Empty com input');
		}

		onSubmit(newComment);
		setNewComment('');
	}

	return (
		<View style={styles.border}>
			<TextInput
				value={newComment}
				onChangeText={newCommentHandler}
				onBlur={addNewCommentHandler}
			/>
			<Button title='Add new com' onPress={addNewCommentHandler} />
		</View>
	);
}

export default InputAddNewComment;

const styles = StyleSheet.create({
	border: {
		borderColor: 'blue',
		borderWidth: 2,
		padding: 5,
		minWidth: 150,
	},
});
