
// state
const downButton = document.getElementById('down-button');
const upButton = document.getElementById('up-button');

const volumeDisplay = document.getElementById('volume-display');

let volume = 10;

downButton.addEventListener('click', () => {
    if (volume > 0) {
        volume--;
        volumeDisplay.innerHTML = volume;
    }
    else return; 
});

upButton.addEventListener('click', () => {
    if (volume < 20) {
        volume++;
        volumeDisplay.innerHTML = volume;
    }
    else return;
});



// component
    // define and grab DOM elements
    // display functions
    // subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components


// page load actions