const text = 'Daniel Rovira';
let letter = 0;

function writer() {
    
    if(letter < text.length) {
        document.querySelector(".name").innerHTML += text.charAt(letter);
        letter++;
        setTimeout(writer, 180)}}

writer();