const GameMachine = require("./gameMachine");
const Casino = require("./casino");
const SuperAdmin = require("./superAdmin");
const {readl,readtext} = require("./helper");
const User = require("./user");


const start = async ()=>{
    let string = null;
    while(string !== 0){
        const adminAbillity = '1. Add Casino\n2. Add Game Machine\n3. Delete Game Machine\n4. Take money from Casino\n5. Add money to Casino\n';
        const userAbillity = '1. play on Game Machine\n';
        console.log(`1. SuperAdmin\n2. User\n0. Exit`);
        let read = await readl();
        string = read;
        switch(read){
            case 1:
                let superAdm = new SuperAdmin("Admin",1000);
                let newStr = null; 
                    while(newStr !==0){
                        console.log(`${adminAbillity}0. Exit`);
                        read = await readl();
                        newStr = read;
                        switch(read){
                            case 1:
                                console.log("Enter name of casino ");
                                let readt = await readtext();
                                superAdm.newCasino(readt);
                                break;
                            case 2:
                                console.log("Enter sum of new gameMachine ");
                                let readnewGame = await readtext();
                                await superAdm.newGameMachine(readnewGame);
                                break;
                            case 3:
                                console.log("Which gameMachine do you want to delete ?");
                                let readDeleteGame = await readl();
                                await superAdm.deleteGameMachine(readDeleteGame); 
                                break;
                            case 4:
                                console.log("How much money do you want take out ?");
                                let readTakeMoney = await readl();
                                try{
                                    await superAdm.takeOutMoneyFromCasino(readTakeMoney);
                                } catch(err){if(err) console.log(err)}
                                break;
                            case 5:
                                console.log("How much money do you want to add to casino ?");
                                let readAddMoney = await readl();
                                await superAdm.addMoneyToCasino(readAddMoney);
                                break;
                            case 0:
                                console.log("Exit");
                                break;
                        
                            default:
                                console.log("Try again");
                        }
                    }
                break;

            case 2:
                console.log("Enter sum of money");
                let readt = await readl();
                let user = new User("user",readt);
                let newStr1 = null; 
                while(newStr1 !==0){
                    console.log(`${userAbillity}0. Exit`);
                    read = await readl();
                    newStr1 = read;
                    switch(read){
                        case 1:
                            console.log("Enter money");11
                            let readplay = await readl();
                            await user.playgame(readplay);
                        case 0:
                            break;
                        default:
                            console.log("You enter something wrong, try again");
                    }
                }
                break;

            case 0:
                break;
            default:
                console.log("Try again");
        }
    }

}
start();