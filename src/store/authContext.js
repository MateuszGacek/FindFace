import { createContext, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

export const AuthContext = createContext({
	userId: '',
	isAuthenticated: false,
	authenticate: (userId) => {},
	logout: () => {},
});
async function saveUserId(key, value) {
	await SecureStore.setItemAsync(key, value);
}
export async function getUserId() {
	let result = await SecureStore.getItemAsync('userId');
	return result;
}
async function removeUserId() {
	await SecureStore.deleteItemAsync('userId');
}

export function AuthContextProvider({ children }) {
	const [authUserId, setAuthUserId] = useState();

	function authenticate(userId) {
		setAuthUserId(userId);
		saveUserId('userId', userId);
	}
	function logout() {
		setAuthUserId(null);
		removeUserId('userId');
	}

	const value = {
		userId: authUserId,
		isAuthenticated: !!authUserId,
		authenticate: authenticate,
		logout: logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
