// Function that expands and reduce the clickable articles
let isRunning = false
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

function clickAction() {
    expand(this)
}

const buttons = document.querySelectorAll('.squareButton')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', clickAction)
}


// Function to navigate the products
document.addEventListener('DOMContentLoaded', function() {
    let currentImageIndex = 1; // Índice de la imagen actual

    // Función para mostrar la imagen actual
    function showCurrentImage() {
        let images = document.querySelectorAll('#carrusel img');
        images.forEach(function(img) {
            img.style.display = 'none'; // Ocultar todas las imágenes
        });
        let currentImage = document.getElementById('img' + currentImageIndex);
        currentImage.style.display = 'block'; // Mostrar la imagen actual
    }

    // Función para avanzar a la siguiente imagen
    function nextImage() {
        currentImageIndex++;
        if (currentImageIndex > 3) { // Si llegamos al final, volvemos al principio
            currentImageIndex = 1;
        }
        showCurrentImage();
    }

    // Función para retroceder a la imagen anterior
    function prevImage() {
        currentImageIndex--;
        if (currentImageIndex < 1) { // Si estamos al principio, vamos al final
            currentImageIndex = 3;
        }
        showCurrentImage();
    }

    // Manejadores de eventos para los botones de navegación
    document.getElementById('prevButton').addEventListener('click', prevImage);
    document.getElementById('nextButton').addEventListener('click', nextImage);

    // Mostrar la imagen inicial
    showCurrentImage();
});
function handlePrevButtonClick(event) {
    // Detener la propagación del evento
    event.stopPropagation();
    // Tu lógica para mover a la imagen anterior
}

function handleNextButtonClick(event) {
    // Detener la propagación del evento
    event.stopPropagation();
    // Tu lógica para mover a la siguiente imagen
}

// Imagen slider
document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById('carrusel');
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
  });
