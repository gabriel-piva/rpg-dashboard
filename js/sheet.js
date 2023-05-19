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

// Display Box
const loadCharacterDisplay = () => {
    const display = currentCharacter.getCharacterDisplay();
    display.querySelector("#characterImage").addEventListener('click', () => console.log("Editar Imagem"));
    display.querySelector("#btnEditLife").addEventListener('click', () => console.log("Editar Vida"));
    display.querySelector("#btnEditSanity").addEventListener('click', () => console.log("Editar Sanidade"));
    display.querySelector("#btnEditPower").addEventListener('click', () => console.log("Editar Poder"));
}

// Update Display

// -------------------------------------------------

// Details Box
const loadCharacterDetails = () => {
    const details = currentCharacter.getCharacterDetails();
    details.querySelector("#inputName").addEventListener("input", updateName);
    details.querySelector("#inputRace").addEventListener("input", updateRace);
    details.querySelector("#inputClass").addEventListener("input", updateClass);
    details.querySelector("#characterDescription").addEventListener("input", updateDescription);
}

// Update Details
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

// -------------------------------------------------

// Attributes Box
const loadCharacterAttributes = () => {
    const attributes = currentCharacter.getCharacterAttributes();
    //attributes.querySelector("").addEventListener("", func);
}

// -------------------------------------------------

// Skills Box
const loadCharacterSkills = () => {
    const skills = currentCharacter.getCharacterSkills();
}

// -------------------------------------------------

// Attacks Box
const loadCharacterAttacks = () => {
    const attacks = currentCharacter.getCharacterAttacks();
}

// -------------------------------------------------

// Abilities Box
const loadCharacterAbilities = () => {
    const abilities = currentCharacter.getCharacterAbilities();
}

// -------------------------------------------------

// Status Box
const loadCharacterStatus = () => {
    const status = currentCharacter.getCharacterStatus();
}

// -------------------------------------------------

// Inventory Box
const loadCharacterInventory = () => {
    const inventory = currentCharacter.getCharacterInventory();
}

// -------------------------------------------------

// Notes Box
const loadCharacterNotes = () => {
    const notes = currentCharacter.getCharacterNotes();
}

// --------------------------------------------------------------------------

// Modals

// TODO

// --------------------------------------------------------------------------

// Sheet Data

const loadCharacterData = () => {
    loadCharacterDisplay();
    loadCharacterDetails();
    loadCharacterAttributes();
    loadCharacterSkills();
    loadCharacterAttacks();
    loadCharacterAbilities();
    loadCharacterStatus();
    loadCharacterInventory();
    loadCharacterNotes();
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