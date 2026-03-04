// Inicializar Swiper.js
var swiper = new Swiper(".mySwiper", {
    // --- EFECTO DE CUBIERTA (Depth/Scale) ---
    effect: "coverflow", // Este es el efecto clave para recrear el ejemplo
    grabCursor: true, // Cambia el cursor para indicar que se puede arrastrar
    centeredSlides: true, // La tarjeta activa siempre está en el centro
    slidesPerView: "auto", // El ancho de las tarjetas se ajusta automáticamente
    initialSlide: 1, // Empieza en la segunda tarjeta
    loop: true, // El carrusel se repite infinitamente
    loopedSlides: 3, // Cuántas slides adicionales para el loop

    // Configuración del efecto Coverflow
    coverflowEffect: {
      rotate: 0, // No girar las tarjetas
      stretch: 0, // No "estirar" las tarjetas
      depth: 100, // Profundidad (cuánto se alejan las no activas)
      modifier: 2.5, // Multiplicador del efecto para que sea más dramático
      slideShadows: false, // Usaremos sombras CSS personalizadas, no las predeterminadas
    },

    // --- REPRODUCCIÓN AUTOMÁTICA (Lenta) ---
    autoplay: {
      delay: 5000, // Tiempo de espera en milisegundos entre transiciones (5 segundos)
      disableOnInteraction: false, // No detener la reproducción si el usuario interactúa
    },

    // --- TRANSICIONES SUAVES Y LENTAS ---
    speed: 1200, // Duración de la animación de transición en milisegundos (1.2 segundos)

    // --- NAVEGACIÓN Y PAGINACIÓN ---
    pagination: {
      el: ".swiper-pagination", // Contenedor de la paginación
      clickable: true, // Permitir clic en los puntos
    },
    navigation: {
      nextEl: ".swiper-button-next", // Botón siguiente
      prevEl: ".swiper-button-prev", // Botón anterior
    },
  });