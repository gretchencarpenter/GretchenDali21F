import * as commentService from '../services/commentService';

export const createComment = async (req, res) => {
  try {
    const { post, recipeID } = req.body;
    const comment = await commentService.createComment(post, recipeID);
    return res.status(200).json(comment);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e.message || 'There was an error.' });
  }
};

export const getComment = async (req, res) => {
  try {
    const { userID } = req.query.keyword;
    const comment = await commentService.getCommentByUser(userID);
    return res.status(200).json(comment);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e.message || 'There was an error.' });
  }
};
