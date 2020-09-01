const typeDefinition = `
    type Skill {
        id: String
        name: String
        value: Int
    }

    type Query {
        getSkill(
            id: String
            name: String
            value: Int
        ): [Skill]
    }

    type Mutation {
        createSkill(
            name: String!,
            value: Int!
        ): String
    }
`;
module.exports = typeDefinition;

/* 
    Hero é a entidade no banco de dados dynamo.
    Query pode filtrar por id, ou name, e ira retornar o type Hero.
    Mutation precisa de um name obrigatoriamente, por isso o ! no final.
    Mutation tmb retorna um objeto hero.
*/

module.exports = typeDefinition;
