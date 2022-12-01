const { AuthenticationError } = require("apollo-server-express");
const { User, Expense, Category } = require("../models");
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
      return User.findOne({ _id: args._id }).populate("expenses");
    },
    category: async (parent, args, context) => {
      return Category.find().populate("items");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password, budget }) => {
      const user = await User.create({ username, email, password, budget });
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

    addExpense: async (parent, { name, expense, categoryid }, context) => {
      if (context.user) {
        const newexpense = await Expense.create({ name, expense });

        const finance = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { expenses: { _id: newexpense._id } } },
          { new: true }
        );

        const updatecat = await Category.findOneAndUpdate(
          { _id: categoryid },
          { $addToSet: { expenses: { _id: newexpense._id } } },
          { new: true }
        );
        return finance;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    updateExpense: async (parent, { name, expense, categoryid }, context) => {
      if (context.user) {
        const updatexp = await Expense.findByIdAndUpdate(
          { _id: expenseid },
          { name: name },
          { new: true }
        );
        return updatexp;
      }
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

    createCategory: async (parent, { name }, context) => {
      return await Category.create({ name: name });
    },
  },
};

module.exports = resolvers;
