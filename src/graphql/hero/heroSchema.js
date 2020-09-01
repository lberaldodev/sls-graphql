const typeDefinition = `
    type Skill {
        id: String
        name: String
        value: Int
    }
    type Hero {
        id: String
        name: String
        skills(id: String): [Skill]
    }

    type Query {
        getHero(
            id: String
            name: String
        ): [Hero]
    }

    type Mutation {
        createHero(
            name: String!,
            skills: [String]!
        ): String
    }
`
module.exports = typeDefinition

/* 
    Hero é a entidade no banco de dados dynamo.
    Query pode filtrar por id, ou name, e ira retornar o type Hero.
    Mutation precisa de um name obrigatoriamente, por isso o ! no final.
    Mutation tmb retorna um objeto hero.
*/

module.exports = typeDefinition;
