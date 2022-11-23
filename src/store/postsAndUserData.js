import { useQuery } from '@tanstack/react-query';
import { getPosts, getUserData } from './supabaseAPI';

export const postsAndUserData = (otherUser, user) => {
	console.log(otherUser, user);
	const postsAndUserData = useQuery({
		queryKey: ['userData'],
		queryFn: () => getUserData(otherUser || user),
	});
	const postsResponse = useQuery({
		queryKey: ['postsData'],
		queryFn: getPosts,
	});
	return [postsAndUserData, postsResponse];
};
