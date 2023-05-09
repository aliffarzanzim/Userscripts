// ==UserScript==
// @name         Website Timer
// @namespace    http://tampermonkey/
// @version      1
// @description  Displays a timer with how much time you've spent on a site
// @match        http*://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get the current time
    const startTime = new Date().getTime();

    // Create a timer element and add it to the page
    const timerElement = document.createElement('div');
    timerElement.style.position = 'fixed';
    timerElement.style.bottom = '10px';
    timerElement.style.right = '10px';
    timerElement.style.backgroundColor = 'white';
    timerElement.style.padding = '10px';
    timerElement.style.borderRadius = '10px';
    timerElement.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.3)';
    document.body.appendChild(timerElement);

    // Update the timer every second
    setInterval(() => {
        // Get the elapsed time in seconds
        const elapsedSeconds = Math.floor((new Date().getTime() - startTime) / 1000);

        // Calculate the minutes and seconds
        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;

        // Set the timer text
        timerElement.innerText = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
})();
