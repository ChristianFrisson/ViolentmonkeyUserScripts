// ==UserScript==
// @name Authorea Optimized TOC
// @description Optimize the table of contents in Authorea
// @version 1.0.0
// @author Christian Frisson
// @namespace http://github.com/ChristianFrisson/ViolentmonkeyUserScripts/blob/master/AuthoreaOptimizedTOC.user.js
// @include *authorea.com*
// @grant GM_addStyle
// @license MIT License; https://github.com/ChristianFrisson/ViolentmonkeyUserScripts/blob/master/LICENSE
// ==/UserScript==

GM_addStyle ( `
    #toc .toc__list {
        max-height: 950px;
    }
    #toc {
        max-width: 380px;
    }
    .row-fluid .span3 {
        width: 100%;
    }
` ).then(style => {
  console.log('Authorea Optimized TOC Violentmonkey UserScript active:', style);
});
