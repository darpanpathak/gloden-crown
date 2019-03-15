const assert = require('assert');
const Kingdom = require('../../models/kingdom');
let kingdom;
const Constants = require('../../const/index');

describe("Kingdom Model", () => {
    it("should generate kingdom object", () => {
        let kingdom = new Kingdom(Constants.spaceKingdom.name, Constants.spaceKingdom.emblem, Constants.spaceKingdom.king, Constants.spaceKingdom.allies);
        assert.equal(kingdom.name,"SPACE");
        assert.equal(kingdom.emblem,"Gorilla");
        assert.equal(kingdom.king,"King Shan");
        assert.equal(kingdom.allies.length,0);
    });
});