document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `<img src="${img.src}" alt="${img.alt}"><span class="close">&times;</span>`;
        document.body.appendChild(modal);

        modal.querySelector('.close').addEventListener('click', () => {
            modal.remove();
        });
    });
});