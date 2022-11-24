import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from '../screens/Search';
import Dashboard from './Dashboard';
import CreatePost from '../screens/CreatePost';
import Profile from '../screens/Profile';
import { useQuery } from '@tanstack/react-query/build/lib/useQuery';
import { getPosts } from '../store/supabaseAPI';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AuthContext } from '../store/authContext';

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
				options={{
					tabBarBadge: data.data.length,
					tabBarIcon: ({ tintColor }) => (
						<Ionicons name='home-outline' size={24} color={tintColor} />
					),
				}}
			/>
			<Tabs.Screen
				name='Search'
				component={Search}
				options={{
					tabBarIcon: ({ tintColor }) => (
						<Ionicons name='search' size={24} color={tintColor} />
					),
				}}
			/>
			<Tabs.Screen
				name='CreatePost'
				component={CreatePost}
				options={{
					tabBarIcon: ({ tintColor }) => (
						<Ionicons name='create-outline' size={24} color={tintColor} />
					),
				}}
			/>
			<Tabs.Screen
				name='Profile'
				component={Profile}
				options={{
					tabBarIcon: ({ tintColor }) => (
						<Ionicons name='person-outline' size={24} color={tintColor} />
					),
				}}
			/>
		</Tabs.Navigator>
	);
}

export default Main;
