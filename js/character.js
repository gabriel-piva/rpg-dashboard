
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
}
class Skill {
    name;
    value;
    constructor(name, value) {
        this.name = name;
        this.value = value;
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
}

// --------------------------------------------------------------------------

// Character

class Character {
    name; attributes; skills;
    image; life; sanity; power; 
    class; race; description; level;
    defense; armor; condition; movement; 
    initiative; attacks; abilities;
    inventory; notes;
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
}

export { Character };

// --------------------------------------------------------------------------
