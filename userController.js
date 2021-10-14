import * as userService from '../services/userService';

export const getUsers = async (req, res) => {
  try {
    const { firstName, lastName } = req.query;
    const users = await userService.getUsersByName(firstName, lastName);
    return res.status(200).json(users);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e.message || 'There was an error.' });
  }
};

export const signUpUser = async (req, res) => {
  try {
    const { email, firstName, lastName } = req.body;
    const user = await userService.createUser(email, firstName, lastName);
    return res.status(200).json(user);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e.message || 'There was an error.' });
  }
};

export const signInUser = async (req, res) => {
  try {
    const userData = await userService.signInUser(req, res);
    return res.status(200).json(userData);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e.message || 'There was an error.' });
  }
};
