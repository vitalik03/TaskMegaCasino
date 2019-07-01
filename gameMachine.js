const { check } = require("./helper");
class GameMachine{

    constructor(money) {
        this.money = money>0?money:0;
    }

    get getMoney() {
        return parseInt(this.money,10);
    }
      
    takeMoney(money){
        return money;
    }

    putMoney(money){
        if(check(money)){
            console.log("Money can not be less than 0") 
            return false;
        }
        this.money += money;
        return this.money;
    }

    play(money){
        if(this.money < money*3) { 
           console.log("GameMachine has not got enough money");
            return money;
        }
           
        let random = (Math.random() * (900) + 100).toFixed(0);
        
        let dataArray = Array.from(random.toString());   
        const distictArray = [...new Set(dataArray)].length;
        if(distictArray === 2){
            this.money -= money * 2;
            console.log("You win", money*2);
            return money*2;
        }
        else if(distictArray === 1){
            this.money -= money * 3;
            console.log("You win", money*3);
            return money*3;
        }
        else{
            console.log("You lose");
            return 0;
        }
    }
        
}
module.exports = GameMachine;
