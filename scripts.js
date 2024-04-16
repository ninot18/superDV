// Function that expands and reduce the clickable articles
function expand(element) {
    const hidden_sec = element.querySelector('.toShowOrHide')
    const buttons = document.querySelectorAll('.squareButton')
    const isExpanded = element.classList.contains('expanded')

    if (isExpanded) {
        element.classList.remove('expanded')
        hidden_sec.style.display = 'none'
        return
    }
    for (let i = 0; i < buttons.length; i++){
        if (buttons[i].classList.contains('expanded')) {
            buttons[i].classList.remove('expanded')
            const toHide = buttons[i].querySelector('.toShowOrHide')
            if (toHide) {
                toHide.style.display = 'none'
            }
        }
    }
    element.classList.toggle('expanded')
    if (element.classList.contains('expanded')) {
        setTimeout(function (){
            hidden_sec.style.display = 'flex'
        }, 1000)
    } else {
        hidden_sec.style.display = 'none'
    }
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
