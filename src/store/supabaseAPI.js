import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const URL = 'https://jvneoinifrjqltrrxesb.supabase.co';
const KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2bmVvaW5pZnJqcWx0cnJ4ZXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1NTAwOTYsImV4cCI6MTk4MjEyNjA5Nn0.YYIUu3UKyNAxEh5Y5_elQxkV3uWHvu3aOjDS4wmyqvg';

const supabase = createClient(URL, KEY, {
	auth: {
		detectSessionInUrl: false,
		storage: AsyncStorage,
	},
});

export async function USER(id) {
	const user = await supabase.from('users').select().eq('uuid', id).single();
	console.log(user);
}

export async function CREATEPOST(description, imageUrl) {
	try {
		const response = await supabase
			.from('posts')
			.insert({
				description: description,
				image_url: imageUrl,
			})
			.limit(1)
			.single();
		console.log(response);
		return response;
	} catch (err) {
		console.log(err);
		return err;
	}
}

export async function addComment(id, comment) {
	const response = await supabase
		.from('comments')
		.insert({
			body: comment,
			post_id: id,
		})
		.limit(1)
		.single();
	return response;
}
export async function deleteComment(id) {
	const response = await supabase.from('comments').delete().eq('id', id);
}

export async function getPostDetails(id) {
	try {
		const response = await supabase
			.from('posts')
			.select(
				'id, created_at, description, image_url, comments ( body, creator_uuid, id )'
			)
			.eq('id', id)
			.is('archived_at', null)
			.single();
		return response;
	} catch (err) {
		return err;
	}
}

export async function getPosts() {
	try {
		const response = await supabase
			.from('posts')
			.select('*')
			.is('archived_at', null);
		return response;
	} catch (err) {
		return err;
	}
}

export async function register(email, password) {
	const { data, error } = await supabase.auth.signUp({
		email: email,
		password: password,
	});

	if (error) {
		return error;
	} else {
		return data;
	}
}

export async function login(email, password) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: email,
		password: password,
	});

	if (error) {
		return error;
	} else {
		return data;
	}
}

export async function getLikes() {
	const response = await supabase
		.from('likes')
		.select('*', { count: 'exact' })
		.eq('post_id', 131);
	console.log(response);
}
export async function setLikes(id) {
	const response = await supabase
		.from('likes')
		.insert({
			post_id: id,
		})
		.limit(1)
		.single();

	console.log(response);
}
