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

export async function getPostDetails(id) {
	const response = await supabase
		.from('posts')
		.select(
			'id, created_at, description, image_url, comments ( body, creator_uuid, id )'
		)
		.eq('id', id)
		.is('archived_at', null)
		.single();

	return response;
}

export async function getPosts() {
	try {
		const response = await supabase
			.from('posts')
			.select('*')
			.is('archived_at', null);
		console.log(response);
	} catch (err) {
		console.log(err);
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

	// const res = JSON.stringify(data);
	if (error) {
		return error;
	} else {
		return data;
	}
}
