/**
 * Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 */

let game;  

// a handler for the 'start game' button

document.querySelector ('#btn__reset').addEventListener ('click', () => {
    game = new Game ();
    game.startGame (); 
});

// select all the onscreen keyboard buttons   

let buttons = document.querySelectorAll ('.key'); 

// a handler for the onscreen keyboard buttons

for (let i = 0; i < buttons.length; i ++) {
    buttons[i].addEventListener ('click', (event) => {
        game.handleInteraction (event.target); 
    });
}

// a handler for the physical computer keyboard  

document.addEventListener ('keyup', (event) => { 
    for (let i = 0; i < buttons.length; i ++) {
        if (event.key === buttons[i].textContent) {
            game.handleInteraction (buttons[i]);
        }
    }
});

