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
}

export { Attribute };

// --------------------------------------------------------------------------