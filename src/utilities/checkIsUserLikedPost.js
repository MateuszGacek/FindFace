export function checkIsPostIsLiked(likesData, userId) {
	const isLiked = likesData.find((like) => {
		return like.creator_uuid === userId;
	});
	return isLiked;
}
