// --------------------------------------------------------------------------

// Attack

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

export { Attack };

// --------------------------------------------------------------------------