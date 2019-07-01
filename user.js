const GameMachine = require("./gameMachine");
const Casino = require("./casino");

class User{
    constructor(name, money) {
        this.name = name;
        this.money = money>0?money:0;
        this.casinoArr = [];
    }

    get Name() {
        return this.name();
    }

    get Money() {
        return this.money();
    }

    async playgame(money){
        return new Promise(async (resolve,reject)=>{
            if(this.casinoArr.length>0){

                console.log(this.casinoArr);
                console.log("Enter number of casino");
                let read = await readl();
                
                if(this.casinoArr.length <= read){
                    return reject("No casino like this");
                }
                
                let casino = this.casinoArr[read];
                let count = casino.getMachineCount;
                
                if(count<=number){
                    return reject("No machine like this");
                }
                const machine = casino.gameMachines[number];
                const winmoney = machine.play(money);
                if(winmoney === 0) this.money-=money;
                this.money+=winmoney;
            }
            return resolve(money);
        });
    }
}

module.exports = User;