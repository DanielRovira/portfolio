const about = {
    personal: "I am a very motivated person to fulfill my objectives and goals. I have dynamism and determination; Good communicative and teamwork skills. I always tr to deliver the best of my abilities and I enjoy challenging tasks that motivate me to grow personally and professionally.",
    professional: "Bachelor and Master in Ecology.  In my academic career I used a lot of R language in statistics and became more and more interested in programming.  I'm currently studying front-end development and starting a new career in information technology."
}

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
} );
