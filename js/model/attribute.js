// --------------------------------------------------------------------------

// Attribute

class Attribute {
    name;
    value;
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    // Methods
    static fromLiteral(attribute) {
        return new Attribute(attribute.name, attribute.value);
    }
    static convertAttributes(attributesList) {
        return attributesList.map(attributeLiteral => Attribute.fromLiteral(attributeLiteral));
    }
    getAttributeCard() {
        const card = document.createElement('div');
        card.classList.add('item');
        card.innerHTML = `
            ${this.name}
            <button type="button" class="openButton delete"><i class="bx bxs-trash"></i></button>
        `;
        return card;
    }
}

export { Attribute };

// --------------------------------------------------------------------------