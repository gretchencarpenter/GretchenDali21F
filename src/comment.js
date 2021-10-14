import mongoose, { Schema } from 'mongoose';

export const CommentSchema = new Schema({
  msg: String,
  commentor: { type: Schema.Types.ObjectID, ref: 'User' },
}, {
  timestamps: true,
  toJSON: { transform: (_doc, { __v, ...comments }) => { return comments; } },
});

const Comment = mongoose.models.comment || mongoose.model('Comment', CommentSchema);

export default Comment;
