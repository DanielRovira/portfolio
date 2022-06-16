
export default function initAbout() {
document.querySelector('.about-text').innerHTML = about['personal'];
const buttons = document.querySelectorAll('.about-btn');

buttons.forEach(  (selected) => {
    const idSelected = selected.attributes.id.value
    selected.addEventListener('click', () => {
        document.querySelector('.about-text').innerHTML = about[idSelected];
        
        buttons.forEach(button => {
            button.classList.remove('selected');
        })
        selected.classList.add('selected');
    } )
} )}
