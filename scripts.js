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
    buttons[i].addEventListener('click', clickAction)
}
/**
 * Current image for being displayed
 * @type {number}
 */
let currentImageIndex = 1
showCurrentImage()

function handleButtonClick(event) {
    event.stopPropagation();
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
    if (currentImageIndex < 1) { // Si estamos al principio, vamos al final
        currentImageIndex = 3;
    }
    showCurrentImage();
}

function dotsCreation() {
    const bulletsContainer = document.querySelector('.bulletsContainer')
    const totalImages = document.querySelectorAll('#carrusel img')

    // Crear las bolitas
    for (let i = 0; i < totalImages.length; i++) {
        const bullet = document.createElement('div');
        bullet.classList.add('bullet');
        bulletsContainer.appendChild(bullet);
    }
}

const nextButton = document.getElementById('prevButton')
const prevButton = document.getElementById('nextButton')
nextButton.addEventListener('click', handleButtonClick)
prevButton.addEventListener('click', handleButtonClick)
nextButton.addEventListener('click', nextImage)
prevButton.addEventListener('click', prevImage)

// Imagen slider

/*
document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById('#carrusel');
    const bulletsContainer = document.querySelector('.bullets-container');
    const image = document.querySelector('#carrusel img');
    
    // Obtener el número total de imágenes
    const totalImages = 3; // Este valor debe ser el total de imágenes que tengas
    
    // Crear las bolitas
    for (let i = 0; i < totalImages; i++) {
      const bullet = document.createElement('div');
      bullet.classList.add('bullet');
      bulletsContainer.appendChild(bullet);
      
      // Evento click para cambiar la imagen
      bullet.addEventListener('click', function() {
        const imageIndex = i + 1;
        image.src = `images/localImgs${imageIndex}.jpg`; // Cambia la ruta de la imagen según la numeración de tus imágenes
        setActiveBullet(this);
      });
    }
    
    // Función para activar la bolita correspondiente
    function setActiveBullet(selectedBullet) {
      const bullets = bulletsContainer.querySelectorAll('.bullet');
      bullets.forEach(bullet => bullet.classList.remove('active'));
      selectedBullet.classList.add('active');
    }
    
    // Activar la primera bolita por defecto
    setActiveBullet(bulletsContainer.querySelector('.bullet'));
  });*/
