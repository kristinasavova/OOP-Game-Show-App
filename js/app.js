/**
 * Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 */

let game;  

document.querySelector ('#btn__reset').addEventListener ('click', () => {
    game = new Game ();
    game.startGame (); 
});

const buttons = document.querySelectorAll ('.key'); 
for (let i = 0; i < buttons.length; i ++) {
    buttons[i].addEventListener ('click', (event) => {
        game.handleInteraction (event.target); 
    });
}
