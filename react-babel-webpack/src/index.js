import "@babel/polyfill"
import React from 'react';
import ReactDOM from 'react-dom';
import Bowser from 'bowser'
import getRandomWord from './js/apiRequests.js'
import App from './app';
import './scss/index.scss';

/* Browser checks
–––––––––––––––––––––––––––––––––––––––––––––––––– */

const browser = Bowser.getParser(window.navigator.userAgent)
const isValidBrowser = browser.satisfies({ 

  macos: {
    safari: ">=10.3"
  },

  mobile: {
    safari: '>=10.3',
    'android browser': '>=67'
  },

	chrome: ">=57",
  firefox: ">=52"
})

//console.log(isValidBrowser)

// example api request
/*// fetch the word from the api
let word = await getRandomWord()

if (word === undefined) {
  // no api available, backup method
  word = shuffle(wordlist[difficulty])
}*/


/* Render
–––––––––––––––––––––––––––––––––––––––––––––––––– */

ReactDOM.render(
	<App isSupported={isValidBrowser}/>, 
	document.getElementById('root')
);
