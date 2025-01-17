// Asegúrate de que todo el contenido de la página esté cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function () {
    // Redirigir al carrusel cuando se presiona el botón
    const surpriseBtn = document.getElementById("surprise-btn");
    if (surpriseBtn) {
        surpriseBtn.addEventListener("click", function () {
            window.location.href = "surprise.html";
        });
    }

    // Inicializar Swiper
    const swiperContainer = document.querySelector('.swiper-container');
    if (swiperContainer) {
        const swiper = new Swiper('.swiper-container', {
            // Habilitar el loop para que el carrusel sea continuo
            loop: true,
            // Configuración del número de diapositivas visibles
            slidesPerView: 1,
            spaceBetween: 10,
            // Configuración del autoplay
            autoplay: {
                delay: 5000,              // Tiempo entre transiciones (en milisegundos)
                disableOnInteraction: false, // Seguir reproduciendo después de una interacción manual
            },
            // Configuración de los botones de navegación
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // Configuración de la paginación
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    // Aplicar efecto al reproductor de Spotify
    const spotifyPlayer = document.querySelector(".spotify-player iframe");
    if (spotifyPlayer) {
        spotifyPlayer.style.opacity = "0";
        spotifyPlayer.style.transition = "opacity 1s ease";

        setTimeout(() => {
            spotifyPlayer.style.opacity = "1";
        }, 500); // Espera 500ms antes de mostrar el reproductor
    }

    const audioToggleButton = document.getElementById("audio-toggle");

    if (audioToggleButton) {
        // Alternar reproducción/pausa al hacer clic
        audioToggleButton.addEventListener("click", function () {
            const iframe = document.getElementById("audio-iframe");
            if (iframe && iframe.contentWindow) {
                iframe.contentWindow.toggleAudio(); // Llama a la función en el iframe

                // Cambiar texto del botón según el estado
                const isPaused = iframe.contentWindow.document.getElementById("background-audio").paused;
                audioToggleButton.textContent = isPaused ? "Reanudar Música" : "Pausar Música";
            }
        });
    }
    
    
});
