let bgColor = undefined

$(document).ready(function() {
    $('#btn').on('click', function() {
        onClickMeClicked()
    })
})


function onClickMeClicked() {
    updateBg()
}

// Model

/**
 * Gets and updates the background.
 */
function updateBg() {
    bgColor = getBgColor()
    showBgColor()
}

/**
 * Selects a random collor from a standard list of colors.
 * @returns the color.
 */
function getBgColor() {
    const colors = ['red', 'white', 'black', 'green', 'blue', 'yellow']
    return colors[Math.floor(Math.random() * colors.length)]
}

/**
 * Fills the values of the corresponding UI Elements.
 */
function showBgColor() {
    $('#clr-hex').html(bgColor)
    $('body').css('background-color', bgColor)
}