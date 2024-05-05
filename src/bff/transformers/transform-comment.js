export const transformComment = (dbComment) => ({
	id: dbComment.id,
	postId: dbComment.post_id,
	publishedAt: dbComment.published_at,
	authorId: dbComment.author_id,
	content: dbComment.content,
});
