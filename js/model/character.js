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
        this.image = "images/starter.jpg";
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
    loadDisplay() {
        const section = document.querySelector(".box.display");
        section.querySelector(".image").style.backgroundImage = `url(${this.image})`;
        section.querySelector(".name").innerText = this.name;
        section.querySelector(".life .value").innerText = `${this.life.current}/${this.life.max}`;
        section.querySelector(".sanity .value").innerText = `${this.sanity.current}/${this.sanity.max}`;
        section.querySelector(".power .value").innerText = `${this.power.current}/${this.power.max}`;
        return section;
    }
    loadDetails() {
        const section = document.querySelector(".box.details");
        section.querySelector("#inputName").value = this.name;
        section.querySelector("#inputRace").value = this.race;
        section.querySelector("#inputClass").value = this.class;
        section.querySelector("#characterDescription").innerText = this.description;
        return section;
    }
    loadAttributes() {
        const section = document.querySelector(".box.attributes");
        const items = this.attributes.map((attribute, index) => `
            <div class="item">
                ${attribute.name}
                <input type="text" class="attribute" data-index="${index}" value="${attribute.value}" autocomplete="off">
            </div>
        `);
        section.querySelector(".content").innerHTML = items.join("");
        return section;
    }
    loadSkills() {
        const section = document.querySelector(".box.skills");
        const items = this.skills.map((skill, index) => `
            <div class="item">
                ${skill.name}
                <input type="text" class="skill" data-index="${index}" value="${skill.value}" autocomplete="off">
            </div>
        `);
        section.querySelector(".content").innerHTML = items.join("");
        return section;
    }
    loadAttacks() {
        const section = document.querySelector(".box.attacks");
        const items = this.attacks.map((attack, index) => `
            <div class="attack" data-index="${index}">
                <div class="name">${attack.name}</div>
                <div class="cost">${attack.cost}<i class='bx bxs-meteor'></i></div>
            </div>
        `);
        section.querySelector(".list").innerHTML = items.join("");
        return section;
    }
    loadAbilities() {
        const section = document.querySelector(".box.abilities");
        const items = this.abilities.map((ability, index) => `
            <div class="ability" data-index="${index}">
                <div class="name">${ability.name}</div>
                <div class="cost">${ability.cost}<i class='bx bxs-meteor'></i></div>
            </div>
        `);
        section.querySelector(".list").innerHTML = items.join("");
        return section;
    }
    loadStatus() {
        const section = document.querySelector(".box.status");
        section.querySelector("#inputLevel").value = this.level;
        section.querySelector("#inputDefense").value = this.defense;
        section.querySelector("#inputArmor").value = this.armor;
        section.querySelector("#inputMovement").value = this.movement;
        section.querySelector("#inputInitiative").value = this.initiative;
        section.querySelector("#inputCondition").value = this.condition;
        return section;
    }
    loadInventory() {
        const section = document.querySelector(".box.inventory");
        const items = this.inventory.map((item, index) => `
            <div class="item"">
                ${item}
                <button type="button" data-index="${index}" class="openButton"><i class="bx bxs-trash"></i></button>
            </div>
        `);
        section.querySelector(".list").innerHTML = items.join("");
        return section;
    }
    loadNotes() {
        const section = document.querySelector(".box.notes");
        section.querySelector("#sheetNotes").innerText = this.notes;
        return section;
    }
}

export { Character };

// --------------------------------------------------------------------------