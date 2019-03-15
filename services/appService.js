const universeService = require('./universService');
const _universeService = new universeService();

const kingdomService = require('./kingdomService');
const _kingdomService = new kingdomService();

const Constants = require('../const/index');

module.exports = class AppService {

    handleInput(msg) {
        if (msg == Constants.question1)
            return _universeService.getRular();
        else if (msg == Constants.question2 || msg == Constants.question3)
            return _universeService.getAlliesOfRular();
        else {
            let inputs = msg.split(Constants.seperator);

            if (inputs.length === 2) {

                let selectedKingdom = _universeService.getKingdomByName(inputs[0]);

                if (selectedKingdom)
                    return _kingdomService.setAllies(selectedKingdom, inputs[1]);
            } else {
                return Constants.wrongInputMsg;
            }
        }
    }
}