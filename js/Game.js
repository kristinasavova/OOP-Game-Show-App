 /**
  * Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * Game.js
  */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases (); 
        this.activePhrase = null; 
    }

      /**
       * Creates phrases for use in game
       * @return {array} an array of phrases that could be used in the game
       */
    createPhrases () {
        let phrases = ['You are a wizard', 
                       'Never trust anything that can think for itself if you cannot see where it keeps its brain',
                       'Every human life is worth the same and worth saving',
                       'Dobby is free',
                       'I solemnly swear I am up to no good'];
        return phrases; 
    }

      /**
       * Select random phrase from phrases property
       * @return {object} phrase object chosen to be used 
       */
    getRandomPhrase () {
        for (let i = 0; i < this.phrases.length; i ++) {
            return this.phrases[Math.floor(Math.random() * this.phrases.length)]; 
        }
    } 
}