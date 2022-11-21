import { postData } from '../store/DUMMY/postData';

export function getSinglePostById(id) {
	const filteredPostsById = postData.filter((post) => {
		return +post.id == id;
	});
    const post = filteredPostsById[0]
	return post;
}
