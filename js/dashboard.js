// --------------------------------------------------------------------------

// RPG Dashboard

// --------------------------------------------------------------------------

import { Character } from "./model/character.js";
import { 
    getCharactersData, setCharactersData, getAttributesData, setAttributesData, 
    getSkillsData, setSkillsData, getMainNotes, setMainNotes 
} from "./storage.js";

// --------------------------------------------------------------------------

// Characters Box

const charactersBox = document.querySelector('#charactersList');

const loadCharacters = () => {}
const addCharacter = () => {}
const removeCharacter = (index) => {}
const openCharacterSheet = (index) => window.location.assign(`../sheet.html?index=${index}`);

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

// Dashboard Data

const loadDashboardData = () => {
    loadCharacters();
    loadAttributes();
    loadSkills();
    document.querySelector('#mainNotes').value = getMainNotes();
}

// --------------------------------------------------------------------------

// Events

window.onload = loadDashboardData;

// --------------------------------------------------------------------------
