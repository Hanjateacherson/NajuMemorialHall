
window.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.fade-text');
    texts.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('fade-in');
        }, i * 300); // 순차적으로 등장 (0.3초 간격)
    });
});


window.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.gradient-text');
    [...titles].reverse().forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('animate');
        }, i * 300);
    });

});
