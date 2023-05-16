// --------------------------------------------------------------------------

// Stats (Life, Sanity, Power)

class Stat {
    current;
    max;
    constructor(current, max) {
        this.current = current;
        this.max = max;
    }

    // Methods
    static fromLiteral(stat) {
        return new Stat(stat.current, stat.max);
    }
    static convertStats(statsList) {
        return statsList.map(statLiteral => Stat.fromLiteral(statLiteral));
    }
}

export { Stat };

// --------------------------------------------------------------------------