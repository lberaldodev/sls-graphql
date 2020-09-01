const { readdirSync } = require("fs");

const {
	makeExecutableSchema,
	mergeSchemas,
	gql,
} = require("apollo-server-lambda");

// 1o le o diretorio
const schemas = readdirSync(__dirname)
	// ignora o arquivo index.js
	.filter((file) => file !== "index.js")
	// faz o require de cada arquivo index.js dentro das pastas (hero, skill, etc)
	.map((folder) => require(`./${folder}`))
	// cria um schema do GraphQL juntando seus respectivos schemas e resolvers
	.map(({ schema, resolvers }) => {
		console.log(resolvers);
		return makeExecutableSchema({
			// gql serve para validar a string do schema e retornar no formato correto
			// não é obrigatorio, mas é recomendado
			typeDefs: gql(schema),
			resolvers,
		});
	});

/*
hero resolver
{
    Query: { getHero }
}
skill resolver
{
    Query: { getSkill }
}
skill + hero = substituição do conteudo de Query

mergeSchemas:

{
    Query: {
        getHero,
        getSkill
    }
}
*/
console.log("SCHEMAS -----", schemas[0]._typeMap.Query)
module.exports = mergeSchemas({schemas})
