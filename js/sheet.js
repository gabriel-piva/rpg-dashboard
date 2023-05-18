// --------------------------------------------------------------------------

// Character Sheet

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
import { createDiceSection } from "./utils.js";

// --------------------------------------------------------------------------

// Current Character by URL Index

let currentCharacter, characterIndex;
const getCurrentCharacter = () => {
    const url = new URLSearchParams(window.location.search);
    characterIndex = parseInt(url.get('index'));
    const charactersList = getCharactersData();
    currentCharacter = charactersList[characterIndex];
    if(!currentCharacter) window.location.assign('./index.html');
}

// --------------------------------------------------------------------------

// Character Boxes

const container = document.querySelector("main .container");

// -------------------------------------------------

// Display Box
const loadCharacterDisplay = () => {
    const display = currentCharacter.getCharacterDisplay();
    display.querySelector("#characterImage").addEventListener('click', () => console.log("Editar Imagem"));
    display.querySelector("#btnEditLife").addEventListener('click', () => console.log("Editar Vida"));
    display.querySelector("#btnEditSanity").addEventListener('click', () => console.log("Editar Sanidade"));
    display.querySelector("#btnEditPower").addEventListener('click', () => console.log("Editar Poder"));
    container.appendChild(display);
}

// -------------------------------------------------

// Details Box
const loadCharacterDetails = () => {
    const details = currentCharacter.getCharacterDetails();
    container.appendChild(details);
    details.querySelector("#inputName").addEventListener("input", updateName);
    details.querySelector("#inputRace").addEventListener("input", updateRace);
    details.querySelector("#inputClass").addEventListener("input", updateClass);
    details.querySelector("#characterDescription").addEventListener("input", updateDescription);
}
const updateName = () => {
    const newName = document.querySelector("#inputName").value
    if(newName.length == 0) return;
    const charactersList = getCharactersData();
    charactersList[characterIndex].name = newName;
    setCharactersData(charactersList);
    currentCharacter = charactersList[characterIndex];
    document.querySelector('.display .name').innerText = newName;
}
const updateRace = () => {
    const newRace = document.querySelector('#inputRace').value;
    const charactersList = getCharactersData();
    charactersList[characterIndex].race = newRace;
    setCharactersData(charactersList);
    currentCharacter = charactersList[characterIndex];
}
const updateClass = () => {
    const newClass = document.querySelector('#inputClass').value;
    const charactersList = getCharactersData();
    charactersList[characterIndex].class = newClass;
    setCharactersData(charactersList);
    currentCharacter = charactersList[characterIndex];
}
const updateDescription = () => {
    const newDescription = document.querySelector('#characterDescription').value;
    const charactersList = getCharactersData();
    charactersList[characterIndex].description = newDescription;
    setCharactersData(charactersList);
    currentCharacter = charactersList[characterIndex];   
}

// --------------------------------------------------------------------------

// Modals

// TODO

// --------------------------------------------------------------------------

// Load Sheet Data

const loadCharacterData = () => {
    loadCharacterDisplay();
    loadCharacterDetails();
    // loadCharacterAttributes();
    // loadCharacterSkills();
    // loadCharacterAttacks();
    // loadCharacterAbilities();
    // loadCharacterStatus();
    // loadCharacterInventory();
    // loadCharacterNotes();
}
const loadSheetData = () => {
    getCurrentCharacter();
    loadCharacterData();
    createDiceSection();
}

// --------------------------------------------------------------------------

// Events

window.onload = loadSheetData;
// document.querySelector("#btnCloseModal").addEventListener("click", closeModal);
// modal.addEventListener('click', (e) => e.target == modal && closeModal());

// --------------------------------------------------------------------------