const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('budgets');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('budgets');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('budgets');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    budgets: async (parent, args, context) => {
        return User.findOne({_id: args._id }).populate('budgets');
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addBudget: async (parent, { name, expense, budget }, context) => {
      if (context.user) {
        // const budget = await Thought.create({
        //   thoughtText,
        //   thoughtAuthor: context.user.username,
        // });

       const budget = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { budgets: { name, expense, budget } } }
        );

        return budget;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    },
    removeBudget: async (parent, { budgetid }, context) => {
      if (context.user) {

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { budgets: { _id: budgetid } } }
        );

        return ('You have removed an expense');
      }
    },
};

module.exports = resolvers;
