document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const targetPosition = targetElement.offsetTop;
          const currentPosition = window.pageYOffset;
          const distance = targetPosition - currentPosition;
          
          const duration = 500; // Duração da animação em milissegundos
          const startTime = performance.now();
          
          function animation(time) {
            const elapsedTime = time - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const ease = easeOutQuart(progress);
            
            window.scrollTo(0, currentPosition + distance * ease);
            
            if (elapsedTime < duration) {
              requestAnimationFrame(animation);
            }
          }
          
          requestAnimationFrame(animation);
        }
      });
    }
    
    // Função de animação easeOutQuart para suavizar o movimento
    function easeOutQuart(t) {
      return 1 - (--t) * t * t * t;
    }
  });