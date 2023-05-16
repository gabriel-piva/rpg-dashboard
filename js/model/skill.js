// --------------------------------------------------------------------------

// Skill

class Skill {
    name;
    value;
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    // Methods
    static fromLiteral(skill) {
        return new Skill(skill.name, skill.value);
    }
    static convertSkills(skillsList) {
        return skillsList.map(skillLiteral => Skill.fromLiteral(skillLiteral));
    }
}

export { Skill };

// --------------------------------------------------------------------------
