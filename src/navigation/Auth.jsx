import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/auth/Login';
import Welcome from '../screens/Welcome';
import Register from '../screens/auth/Register';

const Stack = createNativeStackNavigator();

function Auth() {
	return (
		<Stack.Navigator
			initialRouteName='Welcome'
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='Welcome' component={Welcome} />
			<Stack.Screen name='Login' component={Login} />
			<Stack.Screen name='Register' component={Register} />
		</Stack.Navigator>
	);
}

export default Auth;
