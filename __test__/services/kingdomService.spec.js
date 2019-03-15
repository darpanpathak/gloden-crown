const assert = require('assert');
const sinon = require('sinon');

const Constants = require('../../const/index');
const KingdomService = require("../../services/kingdomService");
const Kingdom = require("../../models/kingdom");

const UniverseService = require("../../services/universService");

let _kingdomService, spaceKingdom, airKingdom, universeSpaceKingdomStub;

describe("testing kingdom service", () => {
    beforeEach(() => {
        spaceKingdom = new Kingdom(Constants.spaceKingdom.name, Constants.spaceKingdom.emblem, Constants.spaceKingdom.king, Constants.spaceKingdom.allies);
        airKingdom = new Kingdom(Constants.airKingdom.name, Constants.airKingdom.emblem);
        _kingdomService = new KingdomService();
    });

    afterEach(() => {
        if (universeSpaceKingdomStub)
            universeSpaceKingdomStub.restore();
    });

    describe("testing validation method", () => {
        it("should return true for the dummyTestMsgPass emblem", () => {
            let response = _kingdomService.checkForValid(airKingdom, Constants.dummyTestMsgPass.toLowerCase());
            assert.equal(response, true);
        });

        it("should return false for the dummyTestMsgFail emblem", () => {
            let response = _kingdomService.checkForValid(airKingdom, Constants.dummyTestMsgFail.toLowerCase());
            assert.equal(response, false);
        });
    });

    describe("testing setAllies method", () => {

        it("should give response ally added", () => {
            universeSpaceKingdomStub = sinon.stub(UniverseService.prototype, 'getKingdomByName').callsFake(() => spaceKingdom);
            let response = _kingdomService.setAllies(airKingdom, Constants.dummyTestMsgPass.toLowerCase());

            assert.equal(response, Constants.allyAdded);
        });

        it("should give response ally already exists", () => {
            universeSpaceKingdomStub = sinon.stub(UniverseService.prototype, 'getKingdomByName').callsFake(() => spaceKingdom);
            let response = _kingdomService.setAllies(airKingdom, Constants.dummyTestMsgPass.toLowerCase());

            assert.equal(response, Constants.alreadyExists);
        });

        it("should give response not found because of the message doesn't have emblem", () => {
            universeSpaceKingdomStub = sinon.stub(UniverseService.prototype, 'getKingdomByName').callsFake(() => spaceKingdom);
            let response = _kingdomService.setAllies(airKingdom, Constants.dummyTestMsgFail.toLowerCase());

            assert.equal(response, Constants.notfound);
        });


    });



});