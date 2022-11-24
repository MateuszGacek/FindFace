import { useQuery } from '@tanstack/react-query';
import { getLikes, getPostDetails, getUserData } from './supabaseAPI';

export const getPostAllDetails = (postId, userId) => {
	const userDataResponse = useQuery({
		queryKey: ['userDataPostAllDetails', { userId }],
		queryFn: () => getUserData(userId),
	});
	const likesDataResponse = useQuery({
		queryKey: ['LikesDataPostAllDetails', { postId }],
		queryFn: () => getLikes(postId),
	});
	const ComentDataResponse = useQuery({
		queryKey: ['CommentDataPostAllDetails', { postId }],
		queryFn: () => getPostDetails(postId),
	});

	return [userDataResponse, likesDataResponse, ComentDataResponse];
};
