


let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#cards-el");

let player =
{
    name: "preet",
    chips: 145
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

// const getRandomCard=()=>
// {
//     return 5
// }
function getRandomCard()
{
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if(randomNumber > 10)

    {
        return 10;
    }
    else if(randomNumber === 1)
    {
        return 11;
    }
    else
    {
        return randomNumber;
    }
}
const startgame=()=>
{
    isAlive = true;
    let firstCard = getRandomCard();
let secondCard = getRandomCard();
 cards = [firstCard ,secondCard];
 sum = firstCard + secondCard;

rendergame();
}

const rendergame=()=>
{ 
    cardEl.textContent = "cards: "

for(let i = 0; i<cards.length; i++)
{
cardEl.textContent +=cards[i] + " ";
}
    sumEl.textContent = "sum: " + sum;
    if(sum<=20)
    {
        message = "Do you want to draw a new card? 🙂"
    }
    else if(sum === 21)
    {
        message = "wohhoo ! You've got a blackjack!  😅"
        hasBlackjack = true;
    }
    else
    {
        message = "You are out of the game😯"
        isAlive = false;
    }
    messageEl.textContent = message;
}

const newcard=()=>
{
    if(isAlive === true && hasBlackjack === false)
    {
    let card = getRandomCard();
    sum+=card;
    cards.push(card);
    rendergame();
    }
}