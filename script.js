// script.js

// Função para verificar se o elemento está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 150 &&
        rect.bottom >= 0
    );
}

// Aplicar animações quando os elementos entram na tela
function applyAnimations() {
    const animatableElements = document.querySelectorAll('.animate');
    animatableElements.forEach((el) => {
        if (isElementInViewport(el)) {
            el.classList.add('active');
        }
    });
}

// Gerenciar o estado ativo no menu e scroll suave
document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Evita comportamento padrão do link

        // Remover estado ativo de todos os links
        document.querySelectorAll('nav ul li a').forEach((item) => {
            item.classList.remove('active');
        });

        // Adicionar estado ativo ao link clicado
        this.classList.add('active');

        // Scroll suave até a seção correspondente
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// Adicionar alteração de cor ao cabeçalho ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#111';
        header.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = '#000';
        header.style.boxShadow = 'none';
    }
});

// Adicionar eventos de scroll e carregar para aplicar animações
window.addEventListener('scroll', applyAnimations);
window.addEventListener('load', applyAnimations);
