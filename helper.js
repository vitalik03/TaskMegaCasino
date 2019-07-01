const readline = require('readline');

const check = (money)=> {
    if(money<0){
        return false;
    }
    return true;
}


const readl = async ()=>{
    return new Promise(async (resolve,reject)=>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        return rl.on('line', async (line) => {
            rl.close();
            return resolve(+line);
        });
    });
}

const readtext = async ()=>{
    return new Promise((resolve,reject)=>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        return rl.on('line', (line) => {
            rl.close();
            return resolve(line);
        });
    });
}

module.exports = {check,readl,readtext};