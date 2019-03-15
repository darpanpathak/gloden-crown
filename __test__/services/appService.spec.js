const assert = require('assert');
const sinon = require('sinon');

const AppService = require("../../services/appService");
const UniverseService = require("../../services/universService");
const KingdomService = require("../../services/kingdomService");

const Kingdom = require('../../models/kingdom');

const _appService = new AppService();

const Constants = require('../../const/index');

describe("testing AppService", () => {

    let universeStub, kingdomStub;

    afterEach(function () {
        if (universeStub) {
            universeStub.restore();
            kingdomStub.restore();
        }
    });

    describe("testing handle input method", () => {

        let selectedKingdom = new Kingdom("AIR", "OWM", "", []);

        it("should return none with question 1", () => {
            let response = _appService.handleInput(Constants.question1);
            assert.equal(response, Constants.rularNotFound);
        });

        it("should return none with question 2", () => {
            let response = _appService.handleInput(Constants.question2);
            assert.equal(response, Constants.rularNotFound);
        });

        it("should return ally added", () => {

            universeStub = sinon.stub(UniverseService.prototype, 'getKingdomByName').callsFake(() => selectedKingdom);
            kingdomStub = sinon.stub(KingdomService.prototype, 'setAllies').callsFake(() => Constants.allyAdded);

            let response = _appService.handleInput(Constants.sampleAlly1);
            assert.equal(response, Constants.allyAdded);
        });

        it("should return ally already exisits", () => {

            universeStub = sinon.stub(UniverseService.prototype, 'getKingdomByName').callsFake(() => selectedKingdom);
            kingdomStub = sinon.stub(KingdomService.prototype, 'setAllies').callsFake(() => Constants.alreadyExists);

            let response = _appService.handleInput(Constants.sampleAlly1);
            assert.equal(response, Constants.alreadyExists);
        });

    });

});