import jwt from 'jwt-simple';
import User from '../models/User';

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.AUTH_SECRET);
}

export const createUser = async (email, firstName, lastName) => {
  const user = new User({
    email,
    firstName,
    lastName,
  });
  await user.save();
  return user;
};

export const signInUser = async (user) => {
  const token = tokenForUser(user);
  return { token, email: user.email };
};

export const getUsersByName = async (firstName, lastName) => {
  const users = await User.find({ $or: [{ firstName }, { lastName }] });
  return users;
};
