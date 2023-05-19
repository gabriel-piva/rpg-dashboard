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
        const section = document.querySelector(".box.display");
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
        const section = document.querySelector(".box.details");
        const content = document.createElement('div');
        content.classList.add('content');
        content.innerHTML = `
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
        `;
        section.appendChild(content);
        return section;
    }
    getCharacterAttributes() {
        const section = document.querySelector(".box.attributes");
        const content = document.createElement('div');
        content.classList.add('content');
        this.attributes.forEach((attribute, index) => {
            content.innerHTML += `
                <div class="item">
                    ${attribute.name}
                    <input type="text" class='attribute' data-index="${index}" value='${attribute.value}' autocomplete="off">
                </div>
            `;
        });
        section.appendChild(content);
        return section;
    }
    getCharacterSkills() {
        const section = document.querySelector(".box.skills");
        const content = document.createElement('div');
        content.classList.add('content');
        this.skills.forEach((skill, index) => {
            content.innerHTML += `
                <div class="item">
                    ${skill.name}
                    <input type="text" class='skill' data-index="${index}" value='${skill.value}' autocomplete="off">
                </div>
            `;
        });
        section.appendChild(content);
        return section;
    }
    getCharacterAttacks() {
        const section = document.querySelector(".box.attacks");
        const list = document.createElement('div');
        list.classList.add('list');
        this.attacks.forEach((attack, index) => {
            list.innerHTML += `
                <div class="attack" data-index="${index}">
                    <div class="name">${attack.name}</div>
                    <div class="cost">${attack.cost}<i class='bx bxs-meteor'></i></i></div>
                </div>
            `;
        });
        section.appendChild(list);
        return section;
    }
    getCharacterAbilities() {
        const section = document.querySelector(".box.abilities");
        const list = document.createElement('div');
        list.classList.add('list');
        this.abilities.forEach((ability, index) => {
            list.innerHTML += `
                <div class="ability" data-index="${index}">
                    <div class="name">${ability.name}</div>
                    <div class="cost">${ability.cost}<i class='bx bxs-meteor'></i></i></div>
                </div>
            `;
        });
        section.appendChild(list);
        return section;
    }
    getCharacterStatus() {
        const section = document.querySelector(".box.status");
        const content = document.createElement('div');
        content.classList.add('content');
        content.innerHTML = `
            <div class="inputField">
                <input type="number" value="${this.level}" id="inputLevel" placeholder="Nível" autocomplete="off" spellcheck="false">
                <label for="inputLevel">Nível</label>
            </div>
            <div class="inputField">
                <input type="text" value="${this.defense}" id="inputDefense" placeholder="Defesa" autocomplete="off" spellcheck="false">
                <label for="inputDefense">Defesa</label>
            </div>
            <div class="inputField">
                <input type="text" value="${this.armor}" id="inputArmor" placeholder="Armadura" autocomplete="off" spellcheck="false">
                <label for="inputArmor">Armadura</label>
            </div>
            <div class="inputField">
                <input type="text" value="${this.movement}" id="inputMovement" placeholder="Movimento" autocomplete="off" spellcheck="false">
                <label for="inputMovement">Movimento</label>
            </div>
            <div class="inputField">
                <input type="text" value="${this.initiative}" id="inputInitiative" placeholder="Iniciativa" autocomplete="off" spellcheck="false">
                <label for="inputInitiative">Iniciativa</label>
            </div>
            <div class="inputField">
                <input type="text" value="${this.condition}" id="inputCondition" placeholder="Condição" autocomplete="off" spellcheck="false">
                <label for="inputCondition">Condição</label>
            </div>
        `;
        section.appendChild(content);
        return section;
        
    }
    getCharacterInventory() {
        const section = document.querySelector(".box.inventory");
        const list = document.createElement('div');
        list.classList.add('list');
        this.inventory.forEach((item, index) => {
            list.innerHTML += `
                <div class="item"">
                    ${item}
                    <button type="button" data-index="${index}" class="openButton"><i class="bx bxs-trash"></i></button>
                </div>
            `;
        });
        section.appendChild(list);
        return section;
    }
    getCharacterNotes() {
        const section = document.querySelector(".box.notes");
        section.innerHTML = `
            <div class="inputField">
                <textarea spellcheck="false" id="sheetNotes" placeholder="Anotações">${this.notes}</textarea>
                <label for="sheetNotes">Anotações</label>
            </div>
        `;
        return section;
    }
}

export { Character };

// --------------------------------------------------------------------------