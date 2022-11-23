import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Home from '../screens/dashboard/Home';
import SinglePost from '../screens/dashboard/SinglePost';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

export default function Dashboard() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='Home' component={Home} />
			<Stack.Screen name='SinglePost' component={SinglePost} />
			<Stack.Screen name='OtherUsersProbile' component={Profile} />
		</Stack.Navigator>
	);
}
