import { Router } from 'express';
import * as userController from './controllers/userController';
import * as recipeController from './controllers/recipeController';
import * as commentController from './controllers/commentController';
import { requireAuth, requireSignin } from './services/passportService';

const router = Router();

router.route('/users')
  .get(requireAuth, userController.getUsers)
  .post(userController.signUpUser);

router.route('/signin')
  .post(requireSignin, userController.signInUser);

router.route('/postrecipe')
  .get(recipeController.getRecipes)
  .post(recipeController.createRecipe);

router.route('/search')
  .get(recipeController.getRecipes);

router.route('/comment')
  .get(commentController.getComment)
  .post(commentController.createComment);

// router.route('/users')
//   .get(async (req, res) => {
//     try {
//       const { firstName, lastName } = req.query;
//       const users = await userService.getUsersByName(firstName, lastName);
//       return res.status(200).json(users);
//     } catch (e) {
//       console.log(e);
//       return res.status(500).json({ error: e.message || 'There was an error.' });
//     }
//   })
//   .post(async (req, res) => {
//     try {
//       const { email, firstName, lastName } = req.body;
//       const user = await userService.createUser(email, firstName, lastName);
//       return res.status(200).json(user);
//     } catch (e) {
//       console.log(e);
//       return res.status(500).json({ error: e.message || 'There was an error.' });
//     }
//   });
//
// get the error message
router.route('/error-route')
  .get((req, res) => {
    res.status(404).send('Page not found');
  });

export default router;
