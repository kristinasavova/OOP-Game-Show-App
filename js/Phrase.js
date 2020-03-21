 /**
  * Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * Phrase.js
  */

class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase (); 
    }

    /**
     * Adds letter placeholders to the display when the game starts 
     */

    addPhraseToDisplay () {
        const characters = this.phrase.split ('');
        for (let i = 0; i < characters.length; i ++) {
            const character = characters[i];
            const listItem = document.createElement ('li');
            listItem.textContent = character;
            if (/[a-z]/.test(character)) {
                listItem.className = `hide letter ${character}`;
            } else {
                listItem.className = `hide space`; 
            }
            document.querySelector ('#phrase ul').appendChild (listItem);
        }
    }

    /**
     * Checks if passed letter is in phrase
     * @param {string} letter - letter to check 
     */
    checkLetter (letter) {
        const listItems = document.querySelector ('#phrase ul').children;
        for (let i = 0; i < listItems.length; i ++) {
            const listItem = listItems[i];
            if (letter === listItem.textContent) {
                return true;
            } else {
                return false; 
            }
        }
    }

    /**
     * Displays passed letter on screen after a match is found  
     * @param {string} letter - letter to display 
     */
    showMatchedLetter (letter) {
        const listItems = document.querySelector ('#phrase ul').children;
        for (let i =0; i < listItems.length; i ++) {
            const listItem = listItems[i];
            if (letter === listItem.textContent) {
                listItem.className = `show letter ${letter}`; 
            }
        }
    }
}