const GameMachine = require("./gameMachine");
const Casino = require("./casino");
const User = require("./user");
const {readl} = require("./helper");
const _ = require("lodash"); 
const BreakException = {};

class SuperAdmin extends User{
    constructor(name,money){
        super(name,money);
    }

    newCasino(name){
        let nextCasino = new Casino(name);
        this.casinoArr.push(nextCasino);
        return nextCasino;
    }

    async newGameMachine(money){
        return new Promise(async (resolve,reject)=>{
            console.log(this.casinoArr);
            console.log("Enter number of casino ");
            let read = await readl();
            let choosenCasino = this.casinoArr[read];
            let nextGameMachine = new GameMachine(money);
            choosenCasino.gameMachines.push(nextGameMachine);
            console.log(choosenCasino);
            return resolve(nextGameMachine);
        });
    }

    async takeOutMoneyFromCasino(number){
        return new Promise(async (resolve,reject)=>{
            if(this.casinoArr.length>0){
                console.log(this.casinoArr);
                console.log("Enter number of casino");
                let read = await readl();
                if(this.casinoArr.length <= read){
                    console.log("No casino like this"); 
                    return reject(false);
                }
                let choosenCasino = this.casinoArr[read];
                if(choosenCasino.CasinoMoney < number){
                    return reject("Not enought money");
                }
                let sum = 0;
                const allAmount = number;
                
                choosenCasino.gameMachines = choosenCasino.gameMachines.sort();
                console.log(choosenCasino.gameMachines);

                try {
                    choosenCasino.gameMachines.forEach((item)=>{
                    if(item.money >= number) {
                        item.money -= number;   
                        throw BreakException;
                    }
                    sum = item.money;
                    item.money-=sum;
                    number-=sum;
                    });
                } catch (err){
                    if (err !== BreakException) throw err;
                }
                return resolve(allAmount);
            }
            console.log("No casino");
            return reject(false);
        });
    }

    async addMoneyToCasino(number){
        return new Promise(async (resolve,reject)=>{
            if(this.casinoArr.length>0){

                console.log(this.casinoArr);
                console.log("Enter number of casino");
                let read = await readl();
                if(this.casinoArr.length <= read){
                    console.log("No casino like this"); 
                    return reject(false);
                }
                let casino = this.casinoArr[read];
            
                const money = number/(casino.getMachineCount);
                console.log(casino.gameMachines);
                casino.gameMachines.forEach((item)=>{
                    item.money += money;
                });
                console.log(casino.gameMachines);
                return resolve(casino.gameMachines);
            }
            console.log("No casino");
            return reject(false);
    
        });
    }
    async deleteGameMachine(number){
        return new Promise(async (resolve,reject)=>{
            if(this.casinoArr.length>0){

                console.log(this.casinoArr);
                console.log("Enter number of casino");
                let read = await readl();
                
                if(this.casinoArr.length <= read){
                    console.log("No casino like this"); 
                    return reject(false);
                }
                
                let casino = this.casinoArr[read];
                let count = casino.getMachineCount;
                
                if(count<=number){
                    console.log("No machine like this");
                    return reject(false);
                }
                const machine = casino.gameMachines[number];
                const addedMoney = machine.getMoney / (count-1);
                casino.gameMachines.splice(number,1);
                
                try{
                    casino.gameMachines.forEach((item)=>{
                    if(count<=2) {
                        item.money = parseInt(item.money,10);
                        item.money += machine.getMoney;
                        console.log(typeof machine.getMoney);
                        console.log(item.money);
                        throw BreakException;
                    }
                    item.money += addedMoney;
                    });
                } catch(err){
                        if (err !== BreakException) throw err;
                }
                console.log(casino.gameMachines);
                return resolve(casino.gameMachines);
            }
            console.log("No casino");
            return reject(false);
    
        });
    }

}

module.exports = SuperAdmin;