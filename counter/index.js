// Initial State
const DEFAULT = 0
let counter = DEFAULT

$(document).ready(function() {
    $('#btnDecr').on('click', () => onDecreaseClicked())
    $('#btnReset').on('click', () => onResetClicked())
    $('#btnIncr').on('click', () => onIncreaseClicked())
})

/**
 * Actions taken after 'Decrease' button was clicked.
 * Actions include decreasing the counter.
 */
function onDecreaseClicked() {
    decreaseCounter()
}

/**
 * Actions taken after 'Reset' button was clicked.
 * Actions include reseting the counter.
 */
function onResetClicked() {
    resetCounter()
}

/**
 * Actions taken after 'Increase' button was clicked.
 * Actions include increasing the counter.
 */
function onIncreaseClicked() {
    increaseCounter()
}

// Model

/**
 *  Decreases the counter and syncs the UI.
 */
function decreaseCounter() {
    counter--
    showCounter()
}

/**
 *  Resets the counter and syncs the UI.
 */
function resetCounter() {
    counter = DEFAULT
    showCounter()
}

/**
 *  Increases the counter and syncs the UI.
 */
function increaseCounter() {
    counter++
    showCounter()
}

/**
 * Assigns counter to the corresponding UI Element.
 * And gives styling accordingly.
 */
function showCounter() {
    $('#counter').html(counter)
    styleCounter($('#counter'))
}

// function styleCounter(counterDOM) {
//     if (counter > 0) {
//         counterDOM.style.color = 'green'
//     } else if (counter < 0) {
//         counterDOM.style.color = 'red'
//     } else {
//         counterDOM.style.color = 'black'
//     }
// }

function styleCounter(counterDOM) {
    counterDOM.toggleClass('color-green', counter > 0)
    counterDOM.toggleClass('color-red', counter < 0)
    counterDOM.toggleClass('color-black', counter === 0 )
}