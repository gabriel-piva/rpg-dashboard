// --------------------------------------------------------------------------

// Roll Dices

const createDiceSection = () => {
    const section = document.createElement('section');
    section.classList.add('box', 'dice');
    section.innerHTML = `
        <div class="title button">
            Jogar Dados
            <button type="button" class="openButton" id="btnRollDice"><i class='bx bx-cube-alt'></i></button>
        </div>
        <div class="content">
            <div class="inputField">
                <input type="number" max="1000" id="inputDices" placeholder="Quantidade" autocomplete="off">
                <label for="inputDices">Quantidade</label>
            </div>
            <div class="inputField">
                <select id="diceType">
                    <option value="4">D4</option>
                    <option value="6">D6</option>
                    <option value="8">D8</option>
                    <option value="12">D12</option>
                    <option value="20" selected>D20</option>
                    <option value="100">D100</option>
                </select>
            </div>
        </div>
    `;
    document.querySelector('main .container').appendChild(section);
    document.querySelector("#btnRollDice").addEventListener('click', rollDices);
};
const rollDices = () => {
    const inputDices = document.querySelector('#inputDices');
    const diceType = parseInt(document.querySelector('#diceType').value);
    let quantity = inputDices.value;
    if(quantity.length == 0 || quantity <= 0) return; 
    if(quantity > 1000) {
        quantity = 1000;
        inputDices.value = quantity;
    }
    const results = [];
    let highest = 0;
    let sum = 0;
    for (let i = 0; i < quantity; i++) {
        const dice = Math.floor(Math.random() * diceType) + 1;
        results.push(dice);
        sum += dice;
        if(dice > highest) highest = dice;
    }
    const diceResults = {
        quantity: quantity,
        type: diceType,
        results: results,
        highest: highest,
        sum: sum
    }
    modalDiceResults(diceResults);
}
const modalDiceResults = (diceResults) => {
    document.querySelector('.modal').classList.add('active');
    document.querySelector('.modalContainer').classList.add('active');
    const results = diceResults.results.join(" ");
    document.querySelector('.modalContainer').classList.add("modalDices");
    document.querySelector('.modalContent').innerHTML = `
        <div class="title">Resultado de ${diceResults.quantity} D${diceResults.type}</div>
        <div class="resultsList">${results}</div>        
        <div class="mainResults">
            <div class="highest">Maior<span>${diceResults.highest}</span></div>
            <div class="sum">Soma<span>${diceResults.sum}</span></div>
        </div>
    `;
    document.querySelector('.modalContainer').classList.add("modalDices");
    document.querySelector('#btnMainActionModal').disabled = true;
}

export { createDiceSection };

// --------------------------------------------------------------------------