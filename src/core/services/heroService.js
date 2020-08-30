const baseService = require("./baseService");

class HeroService extends baseService {
	constructor({ repository }) {
		super({ repository });
	}
}

module.exports = HeroService;
