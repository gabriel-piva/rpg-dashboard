// --------------------------------------------------------------------------

// Character Sheet

// --------------------------------------------------------------------------

import { Attack } from "./model/attack.js";
import { Ability } from "./model/ability.js";
import { getCharactersData, updateCharacterData } from "./storage.js";
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
    display.querySelector("#characterImage").addEventListener('click', modalUpdateImage);
    display.querySelector("#btnEditLife").addEventListener('click', modalUpdateLife);
    display.querySelector("#btnEditSanity").addEventListener('click', modalUpdateSanity);
    display.querySelector("#btnEditPower").addEventListener('click', modalUpdatePower);
}
const updateImage = () => {
    const newImage = document.querySelector("#inputImage").value;
    if(newImage.length == 0) return;
    currentCharacter.image = newImage;
    updateCharacterData(currentCharacter, characterIndex);
    loadCharacterDisplay();
    closeModal();
}
const updateLife = () => {
    const currentLife = document.querySelector("#inputCurrentLife").value;
    const maxLife = document.querySelector("#inputMaxLife").value;
    if(currentLife.length == 0 || maxLife.length == 0) return;
    currentCharacter.life.current = currentLife;
    currentCharacter.life.max = maxLife;
    updateCharacterData(currentCharacter, characterIndex);
    loadCharacterDisplay();
    closeModal();
}
const updateSanity = () => {
    const currentSanity = document.querySelector("#inputCurrentSanity").value;
    const maxSanity = document.querySelector("#inputMaxSanity").value;
    if(currentSanity.length == 0 || maxSanity.length == 0) return;
    currentCharacter.sanity.current = currentSanity;
    currentCharacter.sanity.max = maxSanity;
    updateCharacterData(currentCharacter, characterIndex);
    loadCharacterDisplay();
    closeModal();
}
const updatePower = () => {
    const currentPower = document.querySelector("#inputCurrentPower").value;
    const maxPower = document.querySelector("#inputMaxPower").value;
    if(currentPower.length == 0 || maxPower.length == 0) return;
    currentCharacter.power.current = currentPower;
    currentCharacter.power.max = maxPower;
    updateCharacterData(currentCharacter, characterIndex);
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
const updateName = () => {
    const newName = document.querySelector("#inputName").value
    if(newName.length == 0) return;
    currentCharacter.name = newName;
    updateCharacterData(currentCharacter, characterIndex);
    document.querySelector('.display .name').innerText = currentCharacter.name;
}
const updateRace = () => {
    currentCharacter.race = document.querySelector('#inputRace').value;
    updateCharacterData(currentCharacter, characterIndex);
}
const updateClass = () => {
    currentCharacter.class = document.querySelector('#inputClass').value;
    updateCharacterData(currentCharacter, characterIndex);
}
const updateDescription = () => {
    currentCharacter.description = document.querySelector('#characterDescription').value;
    updateCharacterData(currentCharacter, characterIndex);
}

// -------------------------------------------------

// Attributes Box
const loadCharacterAttributes = () => {
    const attributes = currentCharacter.loadAttributes();
    const tags = attributes.querySelectorAll('.attribute');
    tags.forEach(attribute => attribute.addEventListener("input", () => updateAttribute(attribute)));
}
const updateAttribute = (attribute) => {
    if(attribute.value.length == 0) return;
    const index = attribute.dataset.index;
    currentCharacter.attributes[index].value = attribute.value;
    updateCharacterData(currentCharacter, characterIndex);
}

// -------------------------------------------------

// Skills Box
const loadCharacterSkills = () => {
    const skills = currentCharacter.loadSkills();
    const tags = skills.querySelectorAll('.skill');
    tags.forEach(skill => skill.addEventListener("input", () => updateSkill(skill)));
}
const updateSkill = (skill) => {
    if(skill.value.length == 0) return;
    const index = skill.dataset.index;
    currentCharacter.skills[index].value = skill.value;
    updateCharacterData(currentCharacter, characterIndex);
}

// -------------------------------------------------

// Attacks Box
const loadCharacterAttacks = () => {
    const attacks = currentCharacter.loadAttacks();
    attacks.querySelector("#btnCreateAttack").addEventListener('click', modalCreateAttack);
    const tags = attacks.querySelectorAll(".attack");
    tags.forEach(attack => attack.addEventListener("click", () => modalOpenAttack(attack.dataset.index)));
}
const addAttack = () => {
    const name = document.querySelector("#inputAttack").value;
    const cost = document.querySelector("#inputAttackCost").value;
    const damage = document.querySelector("#inputAttackDamage").value;
    const description = document.querySelector("#attackDescription").value;
    if(name.length == 0 || cost.length == 0 || damage.length == 0 || description.length == 0) return;
    const attack = new Attack(name, cost, damage, description);
    currentCharacter.attacks.push(attack);
    updateCharacterData(currentCharacter, characterIndex);
    loadCharacterAttacks();
    closeModal();
}
const removeAttack = (index) => {
    currentCharacter.attacks.splice(index, 1);
    updateCharacterData(currentCharacter, characterIndex);
    loadCharacterAttacks();
    closeModal();
}

// -------------------------------------------------

// Abilities Box
const loadCharacterAbilities = () => {
    const abilities = currentCharacter.loadAbilities();
    abilities.querySelector("#btnCreateAbility").addEventListener('click', modalCreateAbility);
    const tags = abilities.querySelectorAll(".ability");
    tags.forEach(ability => ability.addEventListener("click", () => modalOpenAbility(ability.dataset.index)));
}
const addAbility = () => {
    const name = document.querySelector("#inputAbility").value;
    const cost = document.querySelector("#inputAbilityCost").value;
    const description = document.querySelector("#abilityDescription").value;
    if (name.length == 0 || cost.length == 0 || description.length == 0) return;
    const ability = new Ability(name, cost, description);
    currentCharacter.abilities.push(ability);
    updateCharacterData(currentCharacter, characterIndex);
    loadCharacterAbilities();
    closeModal();
}
const removeAbility = (index) => {
    currentCharacter.abilities.splice(index, 1);
    updateCharacterData(currentCharacter, characterIndex);
    loadCharacterAbilities();
    closeModal();
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

// Modal Delete
const modalDelete = (index, id) => {
    openModal();
    modalContainer.classList.add("modalDelete");
    modalContent.innerHTML = "<span>Deseja realmente excluir?</span>";
    const deleteFunctions = {
        'attack': () => removeAttack(index),
        'ability': () => removeAbility(index),
        'inventoryItem': () => removeInventoryItem(index)
    };
    setModalMainAction(deleteFunctions[id]);
}

// Modals to Update Display
const modalUpdateImage = () => {
    openModal();
    modalContainer.classList.add("modalImage");
    modalContent.innerHTML = `
        <div class="inputField">
            <input type="url" id="inputImage" placeholder="Imagem (URL)" value="${currentCharacter.image == "../images/starter.jpg" ? "" : currentCharacter.image}" autocomplete="off" spellcheck="false">
            <label for="inputImage">Imagem (URL)</label>
        </div>
    `;
    setModalMainAction(updateImage);
}
const modalUpdateLife = () => {
    openModal();
    modalContainer.classList.add("modalLife");
    modalContent.innerHTML = `
        <div class="inputField">
            <input type="text" id="inputCurrentLife" placeholder="Vida Atual" value="${currentCharacter.life.current}" autocomplete="off" spellcheck="false">
            <label for="inputCurrentLife">Vida Atual</label>
        </div>
        <div class="inputField">
            <input type="text" id="inputMaxLife" placeholder="Vida Máxima" value="${currentCharacter.life.max}" autocomplete="off" spellcheck="false">
            <label for="inputMaxLife">Vida Máxima</label>
        </div>
    `;
    setModalMainAction(updateLife);
}
const modalUpdateSanity = () => {
    openModal();
    modalContainer.classList.add("modalSanity");
    modalContent.innerHTML = `
        <div class="inputField">
            <input type="text" id="inputCurrentSanity" placeholder="Sanidade Atual" value="${currentCharacter.sanity.current}" autocomplete="off" spellcheck="false">
            <label for="inputCurrentSanity">Sanidade Atual</label>
        </div>
        <div class="inputField">
            <input type="text" id="inputMaxSanity" placeholder="Sanidade Máxima" value="${currentCharacter.sanity.max}" autocomplete="off" spellcheck="false">
            <label for="inputMaxSanity">Sanidade Máxima</label>
        </div>
    `;
    setModalMainAction(updateSanity);
}
const modalUpdatePower = () => {
    openModal();
    modalContainer.classList.add("modalPower");
    modalContent.innerHTML = `
        <div class="inputField">
            <input type="text" id="inputCurrentPower" placeholder="Poder Atual" value="${currentCharacter.power.current}" autocomplete="off" spellcheck="false">
            <label for="inputCurrentPower">Poder Atual</label>
        </div>
        <div class="inputField">
            <input type="text" id="inputMaxPower" placeholder="Poder Máximo" value="${currentCharacter.power.max}" autocomplete="off" spellcheck="false">
            <label for="inputMaxPower">Poder Máximo</label>
        </div>
    `;
    setModalMainAction(updatePower);
}

// Attack Modals
const modalCreateAttack = () => {
    openModal();
    modalContainer.classList.add("modalCreateAttack");
    modalContent.innerHTML = `
        <div class="inputField">
            <input type="text" id="inputAttack" placeholder="Ataque" autocomplete="off" spellcheck="false">
            <label for="inputAttack">Ataque</label>
        </div>
        <div class="inputField">
            <input type="text" id="inputAttackCost" placeholder="Custo (Poder)" autocomplete="off" spellcheck="false">
            <label for="inputAttackCost">Custo (Poder)</label>
        </div>
        <div class="inputField">
            <input type="text" id="inputAttackDamage" placeholder="Dano" autocomplete="off" spellcheck="false">
            <label for="inputAttackDamage">Dano</label>
        </div>
        <div class="inputField">
            <textarea id="attackDescription" placeholder="Descrição" spellcheck="false"></textarea>
            <label for="attackDescription">Descrição</label>
        </div>
    `;
    setModalMainAction(addAttack);
}
const modalOpenAttack = (index) => {
    openModal();
    modalContainer.classList.add("modalOpenAttack");
    const attack = currentCharacter.attacks[index];
    modalContent.innerHTML = `
        <div class="header">
            <span class="name">${attack.name}</span>
            <span class="cost">${attack.cost}<i class='bx bxs-meteor'></i></span>
        </div>
        <span class="damage">${attack.damage}</span>
        <span class="description">${attack.description}</span>
    `;
    document.querySelector("#btnMainActionModal").innerHTML = "<i class='bx bxs-trash'></i>";
    setModalMainAction(() => {
        closeModal();
        modalDelete(index, 'attack');
    })
}

// Ability Modals
const modalCreateAbility = () => {
    openModal();
    modalContainer.classList.add("modalCreateAbility");
    modalContent.innerHTML = `
        <div class="inputField">
            <input type="text" id="inputAbility" placeholder="Habilidade" autocomplete="off" spellcheck="false">
            <label for="inputAbility">Habilidade</label>
        </div>
        <div class="inputField">
            <input type="text" id="inputAbilityCost" placeholder="Custo (Poder)" autocomplete="off" spellcheck="false">
            <label for="inputAbilityCost">Custo (Poder)</label>
        </div>
        <div class="inputField">
            <textarea id="abilityDescription" placeholder="Descrição" spellcheck="false"></textarea>
            <label for="abilityDescription">Descrição</label>
        </div>
    `;
    setModalMainAction(addAbility);
}
const modalOpenAbility = (index) => {
    openModal();
    modalContainer.classList.add("modalOpenAbility");
    const ability = currentCharacter.abilities[index];
    modalContent.innerHTML = `
        <div class="header">
            <span class="name">${ability.name}</span>
            <span class="cost">${ability.cost}<i class='bx bxs-meteor'></i></span>
        </div>
        <span class="description">${ability.description}</span>
    `;
    document.querySelector("#btnMainActionModal").innerHTML = "<i class='bx bxs-trash'></i>";
    setModalMainAction(() => {
        closeModal();
        modalDelete(index, 'ability');
    });
}


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