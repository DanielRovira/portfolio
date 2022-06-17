import {typeName} from '../text.js';
export default function initTyping() {
    let letter = 0;

    function typeWriter() {
        if(letter < typeName.length) {
            document.querySelector(".name").innerHTML += typeName.charAt(letter);
            letter++;
            setTimeout(typeWriter, 180)
        }
    }

    typeWriter();
}
