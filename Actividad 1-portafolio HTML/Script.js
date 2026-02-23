// Animar elementos al desplazarse
window.addEventListener('scroll', () => {
    const elementos = document.querySelectorAll('.card');
    elementos.forEach(elemento => {
        const posicion = elemento.getBoundingClientRect().top;
        if (posicion < window.innerHeight) {
            elemento.classList.add('visible');
        }
    });
});

// Validar formulario de contacto
document.getElementById('contacto-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre-contacto').value;
    const email = document.getElementById('email-contacto').value;
    
    if (nombre && email) {
        alert('Gracias por tu mensaje');
        e.target.reset();
    }
});