// --------------------------------------------------------------------------

// RPG Dashboard

// --------------------------------------------------------------------------

import { Character } from "./model/character.js";
import { Attribute } from "./model/attribute.js";
import { Skill } from "./model/skill.js";
import { 
    getCharactersData, setCharactersData, 
    getAttributesData, setAttributesData, 
    getSkillsData, setSkillsData, 
    getMasterNotes, setMasterNotes 
} from "./storage.js";

// --------------------------------------------------------------------------

// Characters Box

const loadCharacters = () => {
    const charactersBox = document.querySelector('#charactersList');
    charactersBox.innerHTML = "";
    const charactersList = getCharactersData();
    const charactersCards = charactersList.map((character, index) => {
        const card = character.getCharacterCard();
        card.querySelector('.open').addEventListener('click', () => openCharacter(index));
        card.querySelector('.delete').addEventListener('click', () => modalDelete(index, 'character'));
        return card;
    });
    charactersBox.append(...charactersCards);
}
const addCharacter = () => {
    const name = document.querySelector("#characterName").value;
    if(!name) return;
    const character = new Character(name, getAttributesData(), getSkillsData());
    setCharactersData([...getCharactersData(), character]);
    closeModal();
    loadCharacters();
}
const removeCharacter = (index) => {}
const openCharacter = (index) => window.location.assign(`../sheet.html?index=${index}`);

// --------------------------------------------------------------------------

// Attributes Box

const loadAttributes = () => {
    const attributesBox = document.querySelector('#attributesList');
    attributesBox.innerHTML = "";
    const attributesList = getAttributesData();
    const attributesCards = attributesList.map((attribute, index) => {
        const card = attribute.getAttributeCard();
        card.querySelector('.delete').addEventListener('click', () => modalDelete(index, 'attribute'));
        return card;
    });
    attributesBox.append(...attributesCards);
}
const addAttribute = () => {
    const name = document.querySelector("#attributeName").value;
    if (!name) return;
    const attribute = new Attribute(name, 0);
    setAttributesData([...getAttributesData(), attribute]);
    const charactersList = getCharactersData();
    charactersList.forEach((character) => character.attributes.push(attribute));
    setCharactersData(charactersList);
    closeModal();
    loadAttributes();
};
const removeAttribute = (index) => {}

// --------------------------------------------------------------------------

// Skills Box

const skillsBox = document.querySelector('#skillsList');

const loadSkills = () => {
    const skillsBox = document.querySelector('#skillsList');
    skillsBox.innerHTML = "";
    const skillsList = getSkillsData();
    const skillsCards = skillsList.map((skill, index) => {
        const card = skill.getSkillCard(index);
        card.querySelector('.openButton').addEventListener('click', () => modalDelete(index, 'skill'));
        return card;
    });
    skillsBox.append(...skillsCards);
};
const addSkill = () => {
    const name = document.querySelector('#skillName').value;
    if(!name) return;
    const skill = new Skill(name, 0);
    setSkillsData([...getSkillsData(), skill]);
    const charactersList = getCharactersData();
    charactersList.forEach(character => character.skills.push(skill));
    setCharactersData(charactersList);
    closeModal();
    loadSkills();
}
const removeSkill = (index) => {}

// --------------------------------------------------------------------------

// Modals

let mainAction;
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modalContainer');
const modalContent = document.querySelector('.modalContainer .modalContent');
const btnMainAction = document.querySelector("#btnMainActionModal");

// Open & Close Modal
const openModal = () => {
    modal.classList.add('active');
    modalContainer.classList.add('active');
}
const closeModal = () => {
    modal.classList.remove('active');
    modalContainer.className = modalContainer.classList[0];
    modalContent.innerHTML = "";
    btnMainAction.disabled = false;
    btnMainAction.removeEventListener("click", mainAction);
}

// -------------------------------------------------

// Modal Delete
const modalDelete = (index, id) => {
    openModal();
    modalContainer.classList.add("modalDelete");
    modalContent.innerHTML = "<span>Deseja realmente excluir?</span>";
    const deleteFunctions = {
        'character': () => removeCharacter(index),
        'attribute': () => removeAttribute(index),
        'skill': () => removeSkill(index)
    };
    mainAction = deleteFunctions[id];
    btnMainAction.addEventListener('click', mainAction);
}

// -------------------------------------------------

// Modal New Character 
const modalCreateCharacter = () => {
    openModal();
    modalContainer.classList.add("modalCreateCharacter");
    modalContent.innerHTML = `
        <div class="inputField">
            <input type="text" id="characterName" placeholder="Nome" autocomplete="off" spellcheck="false">
            <label for="characterName">Nome</label>
        </div>
    `;
    mainAction = addCharacter;
    btnMainAction.addEventListener('click', mainAction);
}

// -------------------------------------------------

// Modal New Attribute
const modalCreateAttribute = () => {
    openModal();
    modalContainer.classList.add("modalCreateAttribute");
    modalContent.innerHTML = `
        <div class="inputField">
            <input type="text" id="attributeName" placeholder="Atributo" autocomplete="off" spellcheck="false">
            <label for="attributeName">Atributo</label>
        </div>
    `;
    mainAction = addAttribute;
    btnMainAction.addEventListener('click', mainAction);
}

// -------------------------------------------------

// Modal New Skill
const modalCreateSkill = () => {
    openModal();
    modalContainer.classList.add("modalCreateSkill");
    modalContent.innerHTML = `
        <div class="inputField">
            <input type="text" id="skillName" placeholder="Perícia" autocomplete="off" spellcheck="false">
            <label for="skillName">Perícia</label>
        </div>
    `;
    mainAction = addSkill;
    btnMainAction.addEventListener('click', mainAction);
}

// --------------------------------------------------------------------------

// Load Dashboard Data

const loadDashboardData = () => {
    loadCharacters();
    loadAttributes();
    loadSkills();
    document.querySelector('#masterNotes').value = getMasterNotes();
}

// --------------------------------------------------------------------------

// Events

window.onload = loadDashboardData;
document.querySelector("#btnCreateCharacter").addEventListener("click", modalCreateCharacter);
document.querySelector("#btnCreateAttribute").addEventListener("click", modalCreateAttribute);
document.querySelector("#btnCreateSkill").addEventListener("click", modalCreateSkill);
document.querySelector("#masterNotes").addEventListener("input", () => setMasterNotes(document.querySelector("#masterNotes").value));
document.querySelector("#btnCloseModal").addEventListener("click", closeModal);
modal.addEventListener('click', (e) => e.target == modal && closeModal());

// --------------------------------------------------------------------------