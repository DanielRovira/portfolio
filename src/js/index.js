
import initTyping from "./modules/typing.js";
import initAnimationScroll from "./modules/scroll.js";


setTimeout(initTyping, 500);
initAnimationScroll(); //aparecer




//ajeitar, quando clica no menu para de rolar
const checkbox = document.getElementById('close-menu')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.documentElement.style.overflowY='hidden';
  } else {
    document.documentElement.style.overflowY='auto';
  }
})
