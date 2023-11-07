const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
    setTimeout(() => {
        spinnerWrapperEl.style.opacity = '0';

        setTimeout(() => {
            spinnerWrapperEl.style.display = 'none';
        }, 200);
    }, 1200); 
});
