const BaseRepository = require("./baseRepository");
const schema = require("./schemas/heroSchema");

class HeroRepository extends BaseRepository {
	constructor() {
		//passa para a classe extendida, o schema via construtor..
		super({ schema });
	}
}

module.exports = HeroRepository;
