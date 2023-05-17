// --------------------------------------------------------------------------

// Local Storage Data - Getters & Setters

// --------------------------------------------------------------------------

import { Character } from "./model/character.js";
import { Attribute } from "./model/attribute.js";
import { Skill } from "./model/skill.js";

// --------------------------------------------------------------------------

// Characters

const charactersKey = "characters_rpg";
const getCharactersData = () => {
    const charactersList = JSON.parse(localStorage.getItem(charactersKey)) || [];
    return Character.convertCharacters(charactersList);
}
const setCharactersData = (charactersList) => localStorage.setItem(charactersKey, JSON.stringify(charactersList));

export { getCharactersData, setCharactersData };

// --------------------------------------------------------------------------

// Attributes

const attributesKey = "attributes_rpg";
const getAttributesData = () => {
    const attributesList = JSON.parse(localStorage.getItem(attributesKey)) || [];
    return Attribute.convertAttributes(attributesList);
}
const setAttributesData = (attributesList) => localStorage.setItem(attributesKey, JSON.stringify(attributesList));

export { getAttributesData, setAttributesData };

// --------------------------------------------------------------------------

// Skills

const skillsKey = "skills_rpg";
const getSkillsData = () => {
    const skillsList = JSON.parse(localStorage.getItem(skillsKey)) || [];
    return Skill.convertSkills(skillsList);
}
const setSkillsData = (skillsList) => localStorage.setItem(skillsKey, JSON.stringify(skillsList));

export { getSkillsData, setSkillsData };

// --------------------------------------------------------------------------

// Master Notes

const notesKey = "notes_rpg"
const getMasterNotes = () => localStorage.getItem(notesKey) || "";
const setMasterNotes = (notes) => localStorage.setItem(notesKey, notes);

export { getMasterNotes, setMasterNotes };

// --------------------------------------------------------------------------