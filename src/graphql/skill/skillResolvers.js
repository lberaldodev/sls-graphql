const resolvers = {
	Query: {
		getSkill: async (root, args, context, info) => "Hello",
	},
	Mutation: {
		createSkill: async (root, args, context, info) => "Hello"
	},
};
module.exports = resolvers;
