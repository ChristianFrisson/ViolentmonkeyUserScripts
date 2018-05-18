// ==UserScript==
// @name Trello No Background Image
// @description Remove background image on Trello
// @author Christian Frisson
// @namespace http://github.com/ChristianFrisson/ViolentmonkeyUserScripts/blob/master/TrelloNoBackgroundImage.user.js
// @include *trello.com*
// @grant GM_addStyle
// @license MIT License; https://github.com/ChristianFrisson/ViolentmonkeyUserScripts/blob/master/LICENSE
// ==/UserScript==

GM_addStyle ( ` .body-board-view {
  background-image: none !important;
}

`).then(style=> {
  console.log('Trello No Background Image Violentmonkey UserScript active:', style);
}

);
