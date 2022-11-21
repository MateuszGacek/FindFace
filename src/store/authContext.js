import { createContext, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

export const AuthContext = createContext({
	token: '',
	isAuthenticated: false,
	authenticate: (token) => {},
	logout: () => {},
});
async function saveToken(key, value) {
	await SecureStore.setItemAsync(key, value);
}
export async function getToken(key) {
	let result = await SecureStore.getItemAsync(key);
	console.log(result);
	return result;
}
async function removeToken() {
	await SecureStore.deleteItemAsync('token');
}

export function AuthContextProvider({ children }) {
	const [authToken, setAuthToken] = useState();

	function authenticate(token) {
		setAuthToken(token);
		saveToken('token', token);
	}
	function logout() {
		setAuthToken(null);
		removeToken('token');
	}

	const value = {
		token: authToken,
		isAuthenticated: !!authToken,
		authenticate: authenticate,
		logout: logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
