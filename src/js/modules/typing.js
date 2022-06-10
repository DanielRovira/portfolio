export default function initTyping() {
    let letter = 0;
    const text = 'Daniel Rovira';

    function typeWriter() {
        if(letter < text.length) {
            document.querySelector(".name").innerHTML += text.charAt(letter);
            letter++;
            setTimeout(typeWriter, 180)
        }
    }

    typeWriter();
}