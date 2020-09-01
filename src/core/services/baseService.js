const uuid = require("uuid");

class BaseService {
	constructor({ repository }) {
		this.repository = repository;
	}

	async create(item) {
		return this.repository.create({ ...item, id: uuid.v1() });
	}
	async findOne(id) {
		return this.repository.findOne(id);
	}
	async findAll(query) {
		return this.repository.findAll(query);
	}
}

module.exports = BaseService;
