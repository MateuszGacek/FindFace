import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from '../screens/Search';
import Dashboard from './Dashboard';
import CreatePost from '../screens/CreatePost';
import Profile from '../screens/Profile';
import { useQuery } from '@tanstack/react-query/build/lib/useQuery';
import { getPosts } from '../store/supabaseAPI';
import LoadingOverlay from '../components/UI/LoadingOverlay';

const Tabs = createBottomTabNavigator();

function Main() {
	const { data, isLoading } = useQuery({
		queryKey: ['postsData'],
		queryFn: getPosts,
	});
	if (isLoading) {
		return <LoadingOverlay message='Logging you in...' />;
	}
	return (
		<Tabs.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name='Dashboard'
				component={Dashboard}
				options={{ tabBarBadge: data.data.length }}
			/>
			<Tabs.Screen name='Search' component={Search} />
			<Tabs.Screen name='CreatePost' component={CreatePost} />
			<Tabs.Screen name='Profile' component={Profile} />
		</Tabs.Navigator>
	);
}

export default Main;
