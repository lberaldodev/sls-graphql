class BaseService {
	constructor({ repository }) {
		this.repository = repository;
	}

	async create(item) {
		return this.repository.create(item);
	}
	async findOne(id) {
		return this.repository.findOne(id);
	}
	async findAll() {
		return this.repository.findAll();
	}
}

module.exports = BaseService;
