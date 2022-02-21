// TODO: Declare any global variables we need
let headFlips = 0;
let tailFlips = 0;
let game = document.querySelector("#game")
// creating img element
let penny = document.createElement('img')
penny.src = './assets/images/penny-heads.jpg'
penny.setAttribute('id', 'penny-image')
game.append(penny)
//creating div with border for controls
let controls = document.createElement('div')
controls.setAttribute('class', 'controls')

//We are accessing the div for all elements of the game.
game.append(controls)
let flip = document.createElement('button')
flip.setAttribute('id','flip')
flip.textContent = "Flip the Penny!"
controls.append(flip);
//creating clear button
let clear = document.createElement('button');
clear.setAttribute('id', 'clear')
clear.textContent = 'Clear ScoreBoard'
controls.append(clear);
//creating message
let message = document.createElement('h3')
message.setAttribute('id', 'message')
message.textContent = 'Let\' Get Rolling'
game.append(message)
let total = 0;
let tScore = document.querySelector('#tails')
let hScore = document.querySelector('#heads')
let tPercent = document.querySelector('#tails-percent')
let hPercent = document.querySelector('#heads-percent')
document.addEventListener('DOMContentLoaded', function () {
flip.addEventListener('click', function () {
    let flipHeads = Math.random() < 0.5
    if(flipHeads){
        penny.src = './assets/images/penny-heads.jpg'
        headFlips++;
        message.textContent = 'You flipped heads!'
    }
    else {
        penny.src = './assets/images/penny-tails.jpg'
        tailFlips++;
        message.textContent = "You flipped tails!"
    }
    
    hScore.textContent = headFlips
    
    tScore.textContent = tailFlips
    total++;

    let pHeads = `${Math.round(headFlips/total * 100)}%`
    let pTails = `${Math.round(tailFlips/total * 100)}%`

    
    hPercent.textContent = pHeads
    
    tPercent.textContent = pTails

})
clear.addEventListener('click',function () {
 tailFlips = 0
 headFlips = 0
 total = 0
 hScore.textContent = headFlips
 tScore.textContent = tailFlips
 hPercent.textContent = `${total}%`
 tPercent.textContent = `${total}%`
 

})
})


    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


        // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

