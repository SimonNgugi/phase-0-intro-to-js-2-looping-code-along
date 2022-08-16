// Code your solutions in this file
const names = ["Mary", "Shiku", "Kinami"];

function writeCards(names, birthday) {
    const newArray = [];
    for(let i = 0; i < names.length; i++) {
        let message =  `Thank you, ${names[i]}, for the wonderful ${birthday} gift!`;
        newArray.push(message);
    }
    return newArray;
}

const countDown = i => { while(i >= 0) { console.log(i); i--; }};