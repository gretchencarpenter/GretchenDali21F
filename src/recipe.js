import mongoose, { Schema } from 'mongoose';

const RecipeSchema = new Schema({
  name: { type: String, required: true },
  ingredients: { type: String, default: '' },
  directions: { type: String, default: '' },

  comment: [{ type: Schema.Types.ObjectID, ref: 'Comment' }],
}, {
  timestamps: true,
  toJSON: { transform: (_doc, { __v, ...recp }) => { return recp; } },
});

const Recipe = mongoose.models.recipe || mongoose.model('Recipe', RecipeSchema);

export default Recipe;
