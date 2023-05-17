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
    document.querySelector('#mainNotes').value = getMasterNotes();
}

// --------------------------------------------------------------------------

// Events

window.onload = loadDashboardData;

// --------------------------------------------------------------------------

// !TEMP

// const character1 = {
//     name: "Character 1",
//     attributes: [
//       { name: "Strength", value: 10 },
//       { name: "Dexterity", value: 8 },
//       { name: "Intelligence", value: 12 }
//     ],
//     skills: [
//       { name: "Swordsmanship", value: 7 },
//       { name: "Archery", value: 5 },
//       { name: "Stealth", value: 9 }
//     ],
//     image: "../images/character1.jpg",
//     life: { current: 100, max: 100 },
//     sanity: { current: 80, max: 100 },
//     power: { current: 50, max: 50 },
//     class: "Warrior",
//     race: "Human",
//     description: "A skilled warrior ready for battle",
//     level: 5,
//     defense: "Heavy Armor",
//     armor: "Plate Mail",
//     condition: "Healthy",
//     movement: "Normal",
//     initiative: "Average",
//     attacks: [
//       { name: "Slash", cost: 10, damage: 20, description: "A powerful sword slash" },
//       { name: "Pierce", cost: 8, damage: 18, description: "An accurate arrow shot" }
//     ],
//     abilities: [
//       { name: "Berserk", cost: 20, description: "Enter a state of unstoppable rage" },
//       { name: "Evasion", cost: 15, description: "Dodge incoming attacks with ease" }
//     ],
//     inventory: ["Health Potion", "Mana Potion"],
//     notes: "Remember to stock up on arrows"
// };
// const character2 = {
//     name: "Character 2",
//     attributes: [
//         { name: "Strength", value: 6 },
//         { name: "Dexterity", value: 10 },
//         { name: "Intelligence", value: 14 }
//     ],
//     skills: [
//         { name: "Magic Missile", value: 12 },
//         { name: "Healing", value: 8 },
//         { name: "Alchemy", value: 6 }
//     ],
//     image: "../images/character2.jpg",
//     life: { current: 80, max: 80 },
//     sanity: { current: 90, max: 100 },
//     power: { current: 80, max: 80 },
//     class: "Mage",
//     race: "Elf",
//     description: "A wise mage with arcane knowledge",
//     level: 3,
//     defense: "Robes",
//     armor: "Cloth",
//     condition: "Injured",
//     movement: "Slow",
//     initiative: "Below Average",
//     attacks: [
//         { name: "Fireball", cost: 15, damage: 25, description: "Unleash a fiery explosion" },
//         { name: "Healing Touch", cost: 10, damage: 0, description: "Restore health to allies" }
//     ],
//     abilities: [
//         { name: "Arcane Shield", cost: 12, description: "Create a protective barrier" },
//         { name: "Potion Brewing", cost: 8, description: "Brew powerful potions" }
//     ],
//     inventory: ["Spellbook", "Mana Crystal"],
//     notes: "Research new spells"
// };

// const list = [character1, character2];
// console.log(Character.convertCharacters(list));
