import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Auth from './src/navigation/Auth.jsx';
import Main from './src/navigation/Main.jsx';
import { AuthContext, AuthContextProvider } from './src/store/authContext.js';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useContext } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
	const queryClient = new QueryClient();

	return (
		<SafeAreaView style={styles.container}>
			<QueryClientProvider client={queryClient}>
				<AuthContextProvider>
					<NavigationContainer>
						<Stack.Navigator
							initialRouteName='Auth'
							screenOptions={{
								headerShown: false,
							}}
						>
							<Stack.Screen name='Auth' component={Auth} />
							<Stack.Screen name='Main' component={Main} />
						</Stack.Navigator>
					</NavigationContainer>
				</AuthContextProvider>
			</QueryClientProvider>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		fontSize: 25,
		fontWeight: '500',
	},
});
