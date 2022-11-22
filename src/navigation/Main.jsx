import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from '../screens/Search';
import Dashboard from './Dashboard';
import CreatePost from '../screens/CreatePost';
import Profile from '../screens/Profile';

const Tabs = createBottomTabNavigator();

function Main() {
	return (
		<Tabs.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tabs.Screen name='Dashboard' component={Dashboard} />
			<Tabs.Screen name='Search' component={Search} />
			<Tabs.Screen name='CreatePost' component={CreatePost} />
			<Tabs.Screen name='Profile' component={Profile} />
		</Tabs.Navigator>
	);
}

export default Main;
