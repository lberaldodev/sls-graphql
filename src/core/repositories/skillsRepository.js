const BaseRepository = require("./baseRepository");
const schema = require("./schemas/skillsSchema");

class SkillsRepository extends BaseRepository {
	constructor() {
		//passa para a classe extendida, o schema via construtor..
		super({ schema });
	}
}

module.exports = SkillsRepository;
