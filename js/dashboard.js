// --------------------------------------------------------------------------

// RPG Dashboard

// --------------------------------------------------------------------------

import { Character } from "./model/character.js";
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
    const characterList = getCharactersData();
    const characterCards = characterList.map((character, index) => {
        const card = character.getCharacterCard();
        card.querySelector('.open').addEventListener('click', () => openCharacter(index));
        card.querySelector('.delete').addEventListener('click', () => modalDelete(index, 'character'));
        return card;
    });
    charactersBox.append(...characterCards);
}
const addCharacter = () => {
    const name = document.querySelector("#characterName").value;
    if(!name) return;
    const character = new Character(name, getAttributesData(), getSkillsData());
    const charactersList = [...getCharactersData(), character];
    setCharactersData(charactersList);
    closeModal();
    loadCharacters();
}
const removeCharacter = (index) => {}
const openCharacter = (index) => window.location.assign(`../sheet.html?index=${index}`);

// --------------------------------------------------------------------------

// Attributes Box

const attributesBox = document.querySelector('#attributesList');

const loadAttributes = () => {}
const addAttribute = () => {}
const removeAttribute = (index) => {}

// --------------------------------------------------------------------------

// Skills Box

const skillsBox = document.querySelector('#skillsList');

const loadSkills = () => {}
const addSkill = () => {}
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

// -------------------------------------------------

// Modal New Skill

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
document.querySelector("#btnCloseModal").addEventListener("click", closeModal);
modal.addEventListener('click', (e) => e.target == modal && closeModal());

// --------------------------------------------------------------------------