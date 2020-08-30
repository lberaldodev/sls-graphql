"use strict";
const uuid = require("uuid");
const setupDynamoDB = require("./src/core/util/setupDynamoDB");

setupDynamoDB();

const { ApolloServer, gql } = require("apollo-server-lambda");
const HeroFactory = require("./src/core/factories/heroFactory");
const SkillsFactory = require("./src/core/factories/skillsFactory");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
	type Query {
		hello: String
	}
`;

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		hello: () => "Hello world!",
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

exports.handler = server.createHandler({
	cors: {
		origin: "*",
		credentials: true,
	},
});

async function main() {
	console.log("creating factories");

	const skillFactory = await SkillsFactory.createInstance();

	const heroFactory = await HeroFactory.createInstance();

	const skill_id = uuid.v1();

	await skillFactory.create({
		id: skill_id,
		name: "mage",
		value: 5,
	});

	console.log("get last skill inserted");

	const skill = await skillFactory.findOne(skill_id);

	console.log(skill);

	console.log("get all skills");

	const skills = await skillFactory.findAll();

	console.log(skills);

	const hero_id = uuid.v1();

	await heroFactory.create({
		id: hero_id,
		name: "batman",
		skills: [skill_id],
	});

	console.log("get last hero inserted");

	const hero = await heroFactory.findOne(hero_id);

	console.log(hero);

	console.log("get all heros");

	const heros = await heroFactory.findAll();

	console.log(heros);

	return {
		statusCode: 200,
		body: JSON.stringify({
			heros,
			skills,
		}),
	};
}

module.exports.main = main;
