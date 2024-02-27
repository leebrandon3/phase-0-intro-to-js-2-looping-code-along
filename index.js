// Code your solutions in this file
function writeCards(name,event){
const messages = [];
for(let a = 0;a < name.length;a++){
    messages.push(`Thank you, ${name[a]}, for the wonderful ${event} gift!`);
}
return messages;
}

function countDown(number){
    let b = number;
    while(b >= 0){
        console.log(b);
        b--;
    }
}