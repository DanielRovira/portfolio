export default function initAnimationScroll() {
    const sections = document.querySelectorAll("[data-anime='js-scroll']");

    function animaScroll() {
        sections.forEach((section) => {
            const halfSection = window.innerHeight * 0.7;
            const sectionTop = section.getBoundingClientRect().top;
            if(sectionTop - halfSection < 0) {
                section.classList.add('animation')
                document.querySelector('.scroll').style.opacity = 0
            } else {
                section.classList.remove('animation')
                document.querySelector('.scroll').style.opacity = 1
            }
        })
    }

    window.addEventListener('scroll', animaScroll);
}