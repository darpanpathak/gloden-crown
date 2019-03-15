const universeService = require('./universService');
const _universeService = new universeService();
const Constants = require('../const/index');

module.exports = class KingdomService {

    setAllies(kingdom, msg) {

        if (this.checkForValid(kingdom, msg)) {

            let spaceKingdom = _universeService.getKingdomByName("space");
            if (spaceKingdom.allies.indexOf(kingdom.name) == -1 && spaceKingdom.emblem != kingdom.emblem) {
                spaceKingdom.allies.push(kingdom.name);

                if (spaceKingdom.allies.length >= Constants.minAllies && _universeService.getRular() == Constants.rularNotFound)
                    _universeService.setRular(spaceKingdom);

                return Constants.allyAdded;

            } else
                return Constants.alreadyExists;
        }
        else {
            return Constants.notfound;
        }
    }

    checkForValid(kingdom, msg) {
        let result = true;
        let msgs = msg.split('');
        for (let i = 0; i < kingdom.emblem.length; i++) {
            if (msgs.indexOf(kingdom.emblem[i].toLowerCase()) > -1) {
                let index = msgs.indexOf(kingdom.emblem[i].toLowerCase());
                msgs.splice(index, 1);
            }
            else {
                result = false;
                break;
            }
        }

        return result;
    }
}