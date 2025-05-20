window.addEventListener('DOMContentLoaded', () => {
    // h2에 페이드 인 효과 적용
    const fadeText = document.querySelector('h2.fade-text');
    setTimeout(() => {
        fadeText.classList.add('fade-in');
    }, 300);

    // h1에 그라데이션 애니메이션 효과 적용
    const gradientText = document.querySelector('h1.gradient-text');
    setTimeout(() => {
        gradientText.classList.add('animate');
    }, 800);

    // 버튼 그룹 애니메이션
    const buttonGroup = document.querySelector('.button-group');
    setTimeout(() => {
        buttonGroup.classList.add('show');
    }, 1200);
});