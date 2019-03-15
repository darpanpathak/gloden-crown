module.exports = class Kingdom{

    constructor(name, emblem, king = "", allies = []) {
        this.name = name;
        this.emblem = emblem;
        this.king = king;
        this.allies = allies;
    }
}