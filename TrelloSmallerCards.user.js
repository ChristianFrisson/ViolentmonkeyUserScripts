// ==UserScript==
// @name Trello Smaller Cards
// @description Smaller Cards on Trello
// @version 1.0.0
// @author Christian Frisson
// @namespace http://github.com/ChristianFrisson/ViolentmonkeyUserScripts/blob/master/TrelloSmallerCards.user.js
// @include *trello.com*
// @grant GM_addStyle
// @license MIT License; https://github.com/ChristianFrisson/ViolentmonkeyUserScripts/blob/master/LICENSE
// ==/UserScript==

GM_addStyle ( `
 .list-wrapper {
  width: 200px;
}
`).then(style=> {
  console.log('Trello Smaller Cards Violentmonkey UserScript active:', style);
}

);
