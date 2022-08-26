// ==UserScript==
// @name         Youtube Middle Mouse Mute
// @namespace https://github.com/Klawneb
// @version      0.1
// @description  Mute the Youtube player by clicking middle mouse
// @author       Klawneb
// @match        https://www.youtube.com/*
// @icon         https://upload.wikimedia.org/wikipedia/commons/3/3f/Mute_Icon.svg
// @grant        none
// @license MIT
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';
    var playerContainer;
    var hoveringOver = false;
    if (document.querySelector('#player-theater-container') != null) {
        playerContainer = document.querySelector('#player-theater-container');
    }
    else {
        document.addEventListener("DOMNodeInserted", function(event) {
            if (event.target.id === 'player-theater-container') {
                playerContainer = document.querySelector('#player-theater-container');
                playerContainer.addEventListener("mouseenter", function(event) {
                    hoveringOver = true;
                });
                playerContainer.addEventListener("mouseleave", function(event) {
                    hoveringOver = false;
                });
            }
        });
    }
    document.addEventListener("mousedown", function(event) {
        if (event.button === 1) {
            if (hoveringOver) {
                event.preventDefault();
                document.querySelector('.ytp-mute-button').click();
            }
        }
    });
})();