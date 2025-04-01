// Obtener elementos del DOM
const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');
const tarjeta = document.querySelector('.tarjeta');


// Función para voltear la tarjeta con el botón (cuando se hace clic en "Ver Detalles")
verDetallesButton.addEventListener('click', () => {
  tarjeta.classList.add('girar'); // Agregar la clase 'girar' que activa la rotación
});

// Función para volver a la cara frontal (cuando se hace clic en "Volver")
volverButton.addEventListener('click', () => {
  tarjeta.classList.remove('girar'); // Quitar la clase 'girar' para volver a la cara frontal
});

// Función para girar la tarjeta con el cursor (solo si no ha sido girada por el botón)
tarjeta.addEventListener('mouseenter', () => {
  if (!tarjeta.classList.contains('girar')) {
    tarjeta.classList.add('girar'); // Activar el giro cuando el cursor entra en la tarjeta
  }
});

// Función para volver a la cara frontal cuando el cursor sale de la tarjeta
tarjeta.addEventListener('mouseleave', () => {
  if (tarjeta.classList.contains('girar')) {
    tarjeta.classList.remove('girar'); // Volver a la cara frontal cuando el cursor sale si la tarjeta está girada
  }
});
