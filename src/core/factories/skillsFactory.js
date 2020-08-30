const SkillsRepository = require("../repositories/skillsRepository");
const SkillsService = require("../services/skillsService");

async function createInstance(){
    const skillsRepository = new SkillsRepository();
    const skillsService = new SkillsService({
        repository: skillsRepository
    })
    return skillsService;
}

module.exports = {
    createInstance
}