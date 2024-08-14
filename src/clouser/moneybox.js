// // function moneyBox(coins){
// //     let saveCoins = 0; 
// //     saveCoins +=coins;
// //     console.log(`MoneyBox $${saveCoins}`);

// // }

// // moneyBox(5);
// // moneyBox(5);

// function moneyBox(coins){
//     let saveCoins = 0; 
//     function countCoins(coins){
//         saveCoins +=coins;
//         console.log(`MoneyBox $${saveCoins}`);
//     }
//     return countCoins;
// }

// const myMoneyBox = moneyBox();
// myMoneyBox(5);
// myMoneyBox(5);
// myMoneyBox(15);

// const moneyBoxAnna = moneyBox();
// moneyBoxAnna(10);
// moneyBoxAnna(10);
// moneyBoxAnna(50);

function createPetList() {
    const list = [];
    
    return function(pet) {
        if (pet !== undefined) {
            list.push(pet);
        }
        return list;
    }
}

const myPetList = createPetList();

myPetList("michi");      // Agrega "michi" a la lista
myPetList("firulais");   // Agrega "firulais" a la lista
console.log(myPetList()); // Devuelve ["michi", "firulais"]
