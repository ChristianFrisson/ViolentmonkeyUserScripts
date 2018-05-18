// ==UserScript==
// @name Authorea Optimized Abstract
// @description Optimize the abstract in authorea
// @version 1.0.0
// @author Christian Frisson
// @namespace http://github.com/ChristianFrisson/ViolentmonkeyUserScripts/blob/master/AuthoreaOptimizedAbstract.user.js
// @include *authorea.com*
// @grant GM_addStyle
// @license MIT License; https://github.com/ChristianFrisson/ViolentmonkeyUserScripts/blob/master/LICENSE
// ==/UserScript==

GM_addStyle(`
  .abstract-block {
  background-color: #ffffff;
}
    .abstract-indicator {
        position: unset;
        margin-left: 10px;
        text-align: left;
        color: rgb(51, 51, 51);
        font-size: 22px;
        font-weight: bold;
        font-variant: normal;
        font-family:"Source Sans Pro", sans-serif;
    }
`).then(style => {
  console.log('Authorea Optimized Abstract Violentmonkey UserScript active:', style);
});
