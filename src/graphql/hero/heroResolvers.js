const resolvers = {
    // GET
    Query: {
		getHero: async (root, args, context, info) => "Hello",
	},
	Mutation: {
		createHero: async (root, args, context, info) => "Hello"
	},
}
module.exports = resolvers