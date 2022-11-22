import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Auth from './src/navigation/Auth.jsx';
import Main from './src/navigation/Main.jsx';
import { AuthContextProvider } from './src/store/authContext.js';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<AuthContextProvider>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Main'
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name='Auth' component={Auth} />
					<Stack.Screen name='Main' component={Main} />
				</Stack.Navigator>
			</NavigationContainer>
		</AuthContextProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
