import { useQuery } from '@tanstack/react-query';
import { getLikes, getPostDetails, getPosts, getUserData } from './supabaseAPI';

export const getPostAllDetails = (postId, userId) => {
	const userDataResponse = useQuery({
		queryKey: ['userDataPostAkkDetails'],
		queryFn: () => getUserData(userId),
	});
	const likesDataResponse = useQuery({
		queryKey: ['LikesDataPostAkkDetails'],
		queryFn: () => getLikes(postId),
	});
	const ComentDataResponse = useQuery({
		queryKey: ['CommentDataPostAkkDetails'],
		queryFn: () => getPostDetails(postId),
	});
	return [userDataResponse, likesDataResponse, ComentDataResponse];
};
