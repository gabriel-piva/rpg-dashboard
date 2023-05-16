// --------------------------------------------------------------------------

// Ability

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

export { Ability };

// --------------------------------------------------------------------------