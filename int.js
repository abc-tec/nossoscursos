
const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Quando o ícone entra na tela, adiciona a classe de animação
                entry.target.classList.add('show-section');
            }
        });
    });

    // Seleciona todos os elementos com a classe hidden-icon para observar
    const hiddenElements = document.querySelectorAll('.hidden-section');
    hiddenElements.forEach((el) => observer.observe(el));