const assert = require('assert');
const Universe = require('../../models/universe');
const Kingdom = require('../../models/kingdom');
let universe;
const Constants = require('../../const/index');

describe("Universe Model", () => {
    beforeEach('Setting up the universe model', function () {
        universe = new Universe([], {});
    });

    describe("empty model testing", () => {
        it("kingdomList should be empty", () => {
            assert.equal(universe.kingdomList.length, 0);
        });

        it("rular should be unassigned", () => {
            assert.equal(Object.keys(universe.rular).length, 0);
        });
    });

    describe("function testing", () => {
        let kingdom = new Kingdom(Constants.spaceKingdom.name, Constants.spaceKingdom.emblem, Constants.spaceKingdom.king, Constants.spaceKingdom.allies);

        it("should add kingdom", () => {
            universe.addKingdom(kingdom);

            assert.equal(universe.kingdomList.length, 1);
            assert.equal(JSON.stringify(universe.kingdomList[0]), JSON.stringify(kingdom));
        });

        it("should set rular as king shan of space kingdom", () => {
            universe.setRular(kingdom);
            assert.equal(JSON.stringify(universe.rular), JSON.stringify(kingdom));
        });
    });

});