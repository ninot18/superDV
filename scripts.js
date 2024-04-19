/**
 * Variable that checks if the expand function is running, to prevent malfunctioning while clicking fast
 * @type {boolean}
 * @link expand
 */
let isRunning = false

/**
 * Function that expands the article element "squareButton"
 * @param element receives the element to expand as a parameter
 */
function expand(element) {
    if (isRunning) return
    isRunning = true

    const hidden_sec = element.querySelector('.hide')
    const buttons = document.querySelectorAll('.squareButton')
    const isExpanded = element.classList.contains('expanded')

    if (isExpanded) {
        element.classList.remove('expanded')
        hidden_sec.classList.remove('show')
        isRunning = false
        return
    }
    for (let i = 0; i < buttons.length; i++){
        if (buttons[i].classList.contains('expanded')) {
            buttons[i].classList.remove('expanded')
            const toHide = buttons[i].querySelector('.hide')
            if (toHide) {
                toHide.classList.remove('show')
            }
        }
    }
    element.classList.toggle('expanded')
    hidden_sec.classList.toggle('show')
    isRunning = false
}

/**
 * Function to associate as a button the expand function
 */
function clickAction() {
    expand(this)
}

/**
 * Declaration of the clickable elements
 * @type {NodeListOf<Element>}
 */
const buttons = document.querySelectorAll('.squareButton')
/**
 * Addition of the event listeners to each clickable element, calling clickAction into each one.
 */
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
    buttons[i].addEventListener('click', clickAction)
}
/**
 * Current image for being displayed
 * @type {number}
 */
let currentImageIndex = 1

/**
 * Function to prevent other clicks to interfere with a predominant click
 * @param event Is the event that is being prevented
 */
function handleButtonClick(event) {
    event.stopPropagation()
}

/**
 * Function to show the current image
 */
function showCurrentImage() {
    let images = document.querySelectorAll('#carrusel img')
    images.forEach(function(img) {
        img.style.display = 'none'
    })
    let currentImage = document.getElementById('img' + currentImageIndex)
    currentImage.style.display = 'block'
    setActiveBullet(currentImageIndex)
}

/**
 * Function to navigate to the next image
 */
function nextImage() {
    currentImageIndex++
    if (currentImageIndex > 3) {
        currentImageIndex = 1
    }
    showCurrentImage()
}

/**
 * Function to navigate to the previous image
 */
function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 1) {
        currentImageIndex = 3
    }
    showCurrentImage()
}

/**
 * Function that loads the image associated with a specific id
 * @param num Id of the image that will be displayed
 */
function dotImage(num){
    currentImageIndex = num
    showCurrentImage()
}

/**
 * Creation of the dots to show how many images are being displayed
 */
function dotsCreation() {
    const bulletsContainer = document.querySelector('.bulletsContainer')
    const totalImages = document.querySelectorAll('#carrusel img')

    for (let i = 0; i < totalImages.length; i++) {
        const bullet = document.createElement('div')
        bullet.classList.add('bullet')
        bullet.id = `dot${i+1}`
        bulletsContainer.appendChild(bullet)
    }

}

/**
 * Function that sets the color of the active image that is being displayed
 * @param id of the image that has to be displayed
 */
function setActiveBullet(id) {
    const bulletsContainer = document.querySelector('.bulletsContainer')
    const bullets = bulletsContainer.querySelectorAll('.bullet')
    bullets.forEach(bullet => bullet.classList.remove('active'))
    const dot = document.getElementById(`dot${id}`)
    dot.classList.add('active')
}

/**
 * Function that gets the number from the image ID
 * @param element
 */
function dotAction(element) {
    const fullId = element.id
    let numId = fullId.match(/\d+/)[0]
    dotImage(numId)
}

/**
 * Function to execute the dot action
 */
function dotClick() {
    dotAction(this)
}

/**
 * Creation of the dots
 */
dotsCreation()

/**
 * Loading the first image
 */
showCurrentImage()

/**
 * Creating the buttons to add the click event
 * @type {HTMLElement}
 */
//const nextButton = document.getElementById('nextButton')

/**
 * Creating the buttons to add the click event
 * @type {HTMLElement} Array of "squareButtons elements"
 */
//const prevButton = document.getElementById('prevButton')

/**
 * Adding the event listeners to each button created
 */
//nextButton.addEventListener('click', handleButtonClick)
//prevButton.addEventListener('click', handleButtonClick)
//nextButton.addEventListener('click', nextImage)
//prevButton.addEventListener('click', prevImage)

/**
 * Creating the buttons to add the click event to each dot
 * @type {NodeListOf<Element>} Array of "dots elements"
 */
const dotButtons = document.querySelectorAll('.bullet')

/**
 * Adding the event listener to each button created
 */
dotButtons.forEach(dotButton => dotButton.addEventListener('click', handleButtonClick))
dotButtons.forEach(dotButton => dotButton.addEventListener('click', dotClick))

/**
 *
 */
function closeAll() {
    const squares = document.querySelectorAll('.squareButton')
    squares.forEach(square => {
        square.classList.remove('expanded')
        square.querySelector('.hide').classList.remove('show')
    })
}

const body = document.getElementById('body')
body.addEventListener('click', closeAll)