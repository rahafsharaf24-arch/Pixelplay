window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('#featured-products .product-card.fade-in');
    const windowBottom = window.innerHeight + window.scrollY;

    elements.forEach(el => {
        const elementTop = el.offsetTop + el.offsetHeight / 4;
        if (windowBottom > elementTop) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });
});
