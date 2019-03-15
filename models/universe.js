module.exports = class Universe{

    constructor(kingdomList, kingdom){
        this.kingdomList = kingdomList;
        this.rular = kingdom;
    }

    setRular(kingdom){
        this.rular = kingdom;
     }
 
     addKingdom(kingdom){
         this.kingdomList.push(kingdom);
     }
}