
// --------------------------------------------------------------------------

// Character Construction

// --------------------------------------------------------------------------

// Attribute & Skill

class Attribute {
    name;
    value;
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    // Methods
    static fromLiteral(attribute) {
        return new Attribute(attribute.name, attribute.value);
    }
    static convertAttributes(attributesList) {
        return attributesList.map(attributeLiteral => Attribute.fromLiteral(attributeLiteral));
    }
}
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

export { Attribute, Skill };

// --------------------------------------------------------------------------

// Attack & Ability

class Attack {
    name;
    cost;
    damage;
    description;
    constructor(name, cost, damage, description) {
        this.name = name;
        this.cost = cost;
        this.damage = damage;
        this.description = description;
    }

    // Methods
    static fromLiteral(attack) {
        return new Attack(attack.name, attack.cost, attack.damage, attack.description)
    }
    static convertAttacks(attacksList) {
        return attacksList.map(attackLiteral => Attack.fromLiteral(attackLiteral));
    }
}
class Ability {
    name;
    cost;
    description;
    constructor(name, cost, description) {
        this.name = name;
        this.cost = cost;
        this.description = description;
    }

    // Methods
    static fromLiteral(ability) {
        return new Ability(ability.name, ability.cost, ability.description)
    }
    static convertAbilities(abilitiesList) {
        return abilitiesList.map(abilityLiteral => Ability.fromLiteral(abilityLiteral));
    }
}

export { Attack, Ability };

// --------------------------------------------------------------------------

// Stats (Life, Sanity, Power)

class Stat {
    current;
    max;
    constructor(current, max) {
        this.current = current;
        this.max = max;
    }

    // Methods
    static fromLiteral(stat) {
        return new Stat(stat.current, stat.max);
    }
    static convertStats(statsList) {
        return statsList.map(statLiteral => Stat.fromLiteral(statLiteral));
    }
}

// --------------------------------------------------------------------------

// Character

class Character {
    name; 
    attributes;
    skills;
    image;
    life;
    sanity;
    power; 
    class;
    race;
    description;
    level;
    defense;
    armor;
    condition;
    movement; 
    initiative;
    attacks;
    abilities;
    inventory;
    notes;
    constructor(name, attributes, skills) {
        this.name = name;
        this.attributes = attributes;
        this.skills = skills;
        this.image = "../images/starter.jpg";
        this.life = new Stat(0, 0);
        this.sanity = new Stat(0, 0);
        this.power = new Stat(0, 0);
        this.class = "";
        this.race = "";
        this.description = "";
        this.level = "";
        this.defense = "";
        this.armor = "";
        this.condition = "";
        this.movement = "";
        this.initiative = "";
        this.attacks = new Array();
        this.abilities = new Array();
        this.inventory = new Array();
        this.notes = "";
    }

    // Methods
    static fromLiteral(character) {
        const cvCharacter = new Character(
            character.name, 
            Attribute.convertAttributes(character.attributes), 
            Skill.convertSkills(character.skills)
        );
        cvCharacter.image = character.image;
        cvCharacter.life = Stat.fromLiteral(character.life);
        cvCharacter.sanity = Stat.fromLiteral(character.sanity);
        cvCharacter.power = Stat.fromLiteral(character.power);
        cvCharacter.class = character.class;
        cvCharacter.race = character.race;
        cvCharacter.description = character.description;
        cvCharacter.level = character.level;
        cvCharacter.defense = character.defense;
        cvCharacter.armor = character.armor;
        cvCharacter.condition = character.condition;
        cvCharacter.movement = character.movement;
        cvCharacter.initiative = character.initiative;
        cvCharacter.attacks = Attack.convertAttacks(character.attacks);
        cvCharacter.abilities = Ability.convertAbilities(character.abilities);
        cvCharacter.inventory = character.inventory;
        cvCharacter.notes = character.notes;
        return cvCharacter;
    }
    static convertCharacters(characterList) {
        return characterList.map(characterLiteral => Character.fromLiteral(characterLiteral));
    }
}

export { Character };

// --------------------------------------------------------------------------