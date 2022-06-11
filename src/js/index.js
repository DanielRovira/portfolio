
import initTyping from "./modules/typing.js";


setTimeout(initTyping, 500);

const checkbox = document.getElementById('close-menu')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.documentElement.style.overflowY='hidden';
  } else {
    document.documentElement.style.overflowY='auto';
  }
})