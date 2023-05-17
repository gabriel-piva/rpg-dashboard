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
    getSkillCard() {
        const card = document.createElement('div');
        card.classList.add('item');
        card.innerHTML = `
            ${this.name}
            <button type="button" class="openButton delete"><i class="bx bxs-trash"></i></button>
        `;
        return card;
    }
}

export { Skill };

// --------------------------------------------------------------------------
