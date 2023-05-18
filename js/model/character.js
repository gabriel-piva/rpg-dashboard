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
    getCharacterDisplay() {
        const section = document.createElement('section');
        section.classList.add('box', 'display');
        section.innerHTML = `
            <div class="image" id="characterImage" style="background-image: url(${this.image})">
                <div class="editImage"><i class='bx bxs-pencil'></i></div>
            </div>
            <span class="name">${this.name}</span>
            <div class="life">
                <i class='bx bxs-heart'></i>
                <span class="value">${this.life.current}/${this.life.max}</span>
                <button type="button" class="openButton" id="btnEditLife"><i class='bx bxs-pencil'></i></button>
            </div>
            <div class="sanity">
                <i class='bx bxs-brain'></i>
                <span class="value">${this.sanity.current}/${this.sanity.max}</span>
                <button type="button" class="openButton" id="btnEditSanity"><i class='bx bxs-pencil'></i></button>
            </div>
            <div class="power">
                <i class='bx bxs-meteor'></i>
                <span class="value">${this.power.current}/${this.power.max}</span>
                <button type="button" class="openButton" id="btnEditPower"><i class='bx bxs-pencil'></i></button>
            </div>
        `;
        return section;
    }
    getCharacterDetails() {
        const section = document.createElement('section');
        section.classList.add('box', 'details');
        section.innerHTML = `
            <span class="title">Detalhes</span>
            <div class="content">
                <div class="inputField name">
                    <input type="text" value="${this.name}" id="inputName" placeholder="Nome" autocomplete="off" spellcheck="false">
                    <label for="inputName">Nome</label>
                </div>
                <div class="inputField">
                    <input type="text" value="${this.race}" id="inputRace" placeholder="Raça" autocomplete="off" spellcheck="false">
                    <label for="inputRace">Raça</label>
                </div>
                <div class="inputField">
                    <input type="text" value="${this.class}" id="inputClass" placeholder="Classe" autocomplete="off" spellcheck="false">
                    <label for="inputClass">Classe</label>
                </div>
                <div class="inputField area">
                    <textarea spellcheck="false" id="characterDescription" placeholder="Descrição">${this.description}</textarea>
                    <label for="characterDescription">Descrição</label>
                </div>
            </div>
        `;
        return section;
    }
}

export { Character };

// --------------------------------------------------------------------------