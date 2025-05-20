document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 5000; // 5 segundos

    // Função para ir para um slide específico
    function goToSlide(n) {
        // Remove a classe 'active' de todos os slides e dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Atualiza o índice do slide atual
        currentSlide = (n + slides.length) % slides.length;
        
        // Adiciona a classe 'active' ao slide e dot atuais
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Função para ir para o próximo slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    // Inicia o carrossel automático
    function startCarousel() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    // Inicia o carrossel
    startCarousel();
    // Garante que o primeiro slide esteja ativo
    goToSlide(0);
});
