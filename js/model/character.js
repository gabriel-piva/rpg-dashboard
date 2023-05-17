// --------------------------------------------------------------------------

import { Attribute } from "./attribute.js";
import { Skill } from "./skill.js";
import { Attack } from "./attack.js";
import { Ability } from "./ability.js";
import { Stat } from "./stat.js";

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
    static convertCharacters(charactersList) {
        return charactersList.map(characterLiteral => Character.fromLiteral(characterLiteral));
    }
    getCharacterCard() {
        const card = document.createElement('div');
        card.classList.add('character');
        card.innerHTML = `
            <div class="image" style="background-image: url(${this.image})"></div>
            <span class="name">${this.name}</span>
            <div class="life"><i class='bx bxs-heart'></i>${this.life.current}/${this.life.max}</div>
            <div class="options">
                <button type="button" class="openButton open"><i class='bx bx-link-alt'></i></button>
                <button type="button" class="openButton delete"><i class='bx bxs-trash'></i></button>
            </div>
        `;
        return card;
    }
}

export { Character };

// --------------------------------------------------------------------------