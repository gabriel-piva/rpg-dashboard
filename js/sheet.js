// --------------------------------------------------------------------------

// Character Sheet

// --------------------------------------------------------------------------

import { Character } from "./model/character.js";
import { getCharactersData, setCharactersData } from "./storage.js";
import { createDiceSection, setModalMainAction, openModal, closeModal } from "./utils.js";

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
    const display = currentCharacter.loadDisplay();
    display.querySelector("#characterImage").addEventListener('click', null);
    display.querySelector("#btnEditLife").addEventListener('click', null);
    display.querySelector("#btnEditSanity").addEventListener('click', null);
    display.querySelector("#btnEditPower").addEventListener('click', null);
}

// Update Display
const updateImage = () => {
    const newImage = document.querySelector("#inputImage").value;
    if(newImage.length == 0) return;
    const charactersList = getCharactersData();
    charactersList[characterIndex].image = newImage;
    setCharactersData(charactersList);
    currentCharacter = charactersList[characterIndex];
    loadCharacterDisplay();
    closeModal();
}
const updateLife = () => {
    const currentLife = document.querySelector("#inputCurrentLife").value;
    const maxLife = document.querySelector("#inputMaxLife").value;
    if(currentLife.length == 0 || maxLife.length == 0) return;
    const charactersList = getCharactersData();
    charactersList[characterIndex].life.current = currentLife;
    charactersList[characterIndex].life.max = maxLife;
    setCharactersData(charactersList);
    currentCharacter = charactersList[characterIndex];
    loadCharacterDisplay();
    closeModal();
}
const updateSanity = () => {
    const currentSanity = document.querySelector("#inputCurrentSanity").value;
    const maxSanity = document.querySelector("#inputMaxSanity").value;
    if(currentSanity.length == 0 || maxSanity.length == 0) return;
    const charactersList = getCharactersData();
    charactersList[characterIndex].sanity.current = currentSanity;
    charactersList[characterIndex].sanity.max = maxSanity;
    setCharactersData(charactersList);
    currentCharacter = charactersList[characterIndex];
    loadCharacterDisplay();
    closeModal();
}
const updatePower = () => {
    const currentPower = document.querySelector("#inputCurrentPower").value;
    const maxPower = document.querySelector("#inputMaxPower").value;
    if(currentPower.length == 0 || maxPower.length == 0) return;
    const charactersList = getCharactersData();
    charactersList[characterIndex].power.current = currentPower;
    charactersList[characterIndex].power.max = maxPower;
    setCharactersData(charactersList);
    currentCharacter = charactersList[characterIndex];
    loadCharacterDisplay();
    closeModal();
}

// -------------------------------------------------

// Details Box
const loadCharacterDetails = () => {
    const details = currentCharacter.loadDetails();
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
    const attributes = currentCharacter.loadAttributes();
    //attributes.querySelector("").addEventListener("", func);
}

// -------------------------------------------------

// Skills Box
const loadCharacterSkills = () => {
    const skills = currentCharacter.loadSkills();
}

// -------------------------------------------------

// Attacks Box
const loadCharacterAttacks = () => {
    const attacks = currentCharacter.loadAttacks();
}

// -------------------------------------------------

// Abilities Box
const loadCharacterAbilities = () => {
    const abilities = currentCharacter.loadAbilities();
}

// -------------------------------------------------

// Status Box
const loadCharacterStatus = () => {
    const status = currentCharacter.loadStatus();
}

// -------------------------------------------------

// Inventory Box
const loadCharacterInventory = () => {
    const inventory = currentCharacter.loadInventory();
}

// -------------------------------------------------

// Notes Box
const loadCharacterNotes = () => {
    const notes = currentCharacter.loadNotes();
}

// --------------------------------------------------------------------------

// Sheet Modals

const modalContainer = document.querySelector('.modalContainer');
const modalContent = document.querySelector('.modalContent');

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
document.querySelector("#btnCloseModal").addEventListener("click", closeModal);
document.querySelector('.modal').addEventListener('click', (e) => e.target == document.querySelector('.modal') && closeModal());

// --------------------------------------------------------------------------