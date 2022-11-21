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
