import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';

import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function Dashboard() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='Home' component={Home} />
		</Stack.Navigator>
	);
}
