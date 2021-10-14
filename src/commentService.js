import Comment from '../models/Comment';

// instantiates a new comment with on a recipe
export const createComment = async (msg) => {
  const comment = new Comment({
    msg,
  });
  await comment.save();
  return comment;
};

export const getCommentByUser = async (userID) => {
  const user = await Comment.find({ commentor: userID });
  return user;
};
