const assert = require('assert');
const UniverseService = require("../../services/universService");
const Kingdom = require("../../models/kingdom");
let _universeService, kingdom;
const Constants = require('../../const/index');

describe("testing universe service", () => {

    beforeEach(() => {
        kingdom = new Kingdom(Constants.spaceKingdom.name, Constants.spaceKingdom.emblem, Constants.spaceKingdom.king, Constants.spaceKingdom.allies);
        _universeService = new UniverseService();
        _universeService.setRular(new Kingdom("",""));
    });

    describe("generate universe method testing", () => {
        it("should return true", () => {
            assert.equal(_universeService.generateUniverse(), true);
        });
    });

    describe("getrular and setrular method testing", () => {
        it("should return rular not found", () => {
            assert.equal(_universeService.getRular(), Constants.rularNotFound);
        });

        it("should reply with rular", () => {
            _universeService.setRular(kingdom);

            assert.equal(_universeService.getRular(), Constants.spaceKingdom.king);
        });
    });

    describe("testing getKingdomByName method", () => {
        it("should return with the kingdom", () => {
            let IsUniverseGenerated = _universeService.generateUniverse();
            assert.equal(IsUniverseGenerated, true);
            let response = _universeService.getKingdomByName(Constants.spaceKingdom.name.toLowerCase());
            assert.equal(response.name, kingdom.name);
            assert.equal(response.emblem, kingdom.emblem);
        });
    });

    describe("testing getAlliesOfRular method", () => {

        it("should return allies not found", () => {
            assert.equal(_universeService.getAlliesOfRular(), Constants.rularNotFound);
        });

        it("should return allies of the rular", () => {
            kingdom.allies = Constants.dummyAllies;
            _universeService.setRular(kingdom);

            assert.equal(_universeService.getAlliesOfRular(), Constants.dummyAllies.join(','));
        });


    });

});