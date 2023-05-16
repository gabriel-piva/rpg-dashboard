// --------------------------------------------------------------------------

// Local Storage Data - Getters & Setters

// --------------------------------------------------------------------------

// Characters

const charactersKey = "characters_rpg";
const getCharactersData = () => JSON.parse(localStorage.getItem(charactersKey)) || [];
const setCharactersData = (charactersList) => localStorage.setItem(charactersKey, JSON.stringify(charactersList));

export { getCharactersData, setCharactersData };

// --------------------------------------------------------------------------

// Attributes

const attributesKey = "attributes_rpg";
const getAttributesData = () => JSON.parse(localStorage.getItem(attributesKey)) || [];
const setAttributesData = (attributesList) => localStorage.setItem(attributesKey, JSON.stringify(attributesList));

export { getAttributesData, setAttributesData };

// --------------------------------------------------------------------------

// Skills

const skillsKey = "skills_rpg";
const getSkillsData = () => JSON.parse(localStorage.getItem(skillsKey)) || [];
const setSkillsData = (skillsList) => localStorage.setItem(skillsKey, JSON.stringify(skillsList));

export { getSkillsData, setSkillsData };

// --------------------------------------------------------------------------

// Main Notes

const notesKey = "notes_rpg"
const getMainNotes = () => localStorage.getItem(notesKey);
const setMainNotes = (notes) => localStorage.setItem(notesKey, notes);

export { getMainNotes, setMainNotes };

// --------------------------------------------------------------------------