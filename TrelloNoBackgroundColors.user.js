// ==UserScript==
// @name Trello No Background Colors
// @description Remove background colors on Trello
// @version 1.0.0
// @author Christian Frisson
// @namespace http://github.com/ChristianFrisson/ViolentmonkeyUserScripts/blob/master/TrelloNoBackgroundColors.user.js
// @include *trello.com*
// @grant GM_addStyle
// @license MIT License; https://github.com/ChristianFrisson/ViolentmonkeyUserScripts/blob/master/LICENSE
// ==/UserScript==

GM_addStyle ( `
.list {
  background: white;
}

.body-light-board-background {
  background: white;
}

.body-light-board-background #header {
  background: white;
}

.card-label {
  background-color: white;
  color: black;
}

.badge.is-due-now {
  background-color: white;
  /*color: #eb5a46;*/
  color: black;
}

.icon-clock {
  color: black;
}

.icon-lg.light {
  color: black;
}

.header-logo-default {
  /* background-image: none!important; */
  color: black;
}

.header-btn.new-notifications {
  background: white;
}
`).then(style=> {
  console.log('Trello No Background Colors Violentmonkey UserScript active:', style);
}

);
