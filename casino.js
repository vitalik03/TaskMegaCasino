const GameMachine = require("./gameMachine");

class Casino{

    constructor(name) {
        this.name = name;
        this.gameMachines = [];
    }
    get CasinoMoney() {
        let casinoMoney = 0;
        this.gameMachines.forEach((item)=>{
            casinoMoney+= item.getMoney;
        });
        return casinoMoney;
    }
    get getMachineCount(){
        let countMachine =[...new Set(this.gameMachines)].length;;
        return countMachine;
    }
 }
 
 module.exports = Casino;
