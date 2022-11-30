const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("expenses");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("expenses");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("expenses");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    expenses: async (parent, args, context) => {
      return User.findOne({ _id: args._id }).populate({
        path: "expenses",
        populate: "categories",
      });
    },
    category: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("items");
      }
    },
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
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addExpense: async (parent, { name, budget }, context) => {
      if (context.user) {
        // const budget = await Thought.create({
        //   thoughtText,
        //   thoughtAuthor: context.user.username,
        // });

        const expense = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { expenses: { name, expense, budget } } }
        );

        return expense;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeExpense: async (parent, { expenseid }, context) => {
      if (context.user) {
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { expenses: { _id: expenseid } } }
        );

        return { message: "You have removed an expense!" };
      }
    },
  },
};

module.exports = resolvers;
