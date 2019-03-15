const Kingdom = require('../models/kingdom');
const Universe = require('../models/universe');
const Constants = require('../const/index');

const universe = new Universe([], {});

module.exports = class UniversService {

    generateUniverse() {
        try {
            universe.addKingdom(new Kingdom("LAND", "Panda"));
            universe.addKingdom(new Kingdom("WATER", "Octopus"));
            universe.addKingdom(new Kingdom("ICE", "Mammoth"));
            universe.addKingdom(new Kingdom("AIR", "Owl"));
            universe.addKingdom(new Kingdom("FIRE", "Dragon"));
            universe.addKingdom(new Kingdom("SPACE", "Gorilla", "King Shan"));

            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }

    getRular() {
        if (universe.rular.name)
            return universe.rular.king || universe.rular.name;
        else
            return Constants.rularNotFound;
    }

    getKingdomByName(name) {
        return universe.kingdomList.find(x => x.name.toLowerCase() == name);
    }

    getAlliesOfRular() {
        if (universe.rular.name)
            return universe.rular.allies.join(',');
        else
            return Constants.rularNotFound;
    }

    setRular(kingdom) {
        universe.rular = kingdom;
    }
}