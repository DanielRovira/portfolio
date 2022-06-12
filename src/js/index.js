
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


var onAppear = [];

document.addEventListener("DOMContentLoaded", function() {
  onAppear = [].map.call(document.querySelectorAll(".onAppear"), function(item ) {
    return item;
  });
}, false);

window.addEventListener("scroll", function() {
  onAppear.forEach(function(elem) {
    var vwTop = window.pageYOffset;
    var vwBottom = (window.pageYOffset + window.innerHeight);
    var elemTop = elem.offsetTop;
    var elemHeight = elem.offsetHeight;
    
    if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
     elem.classList.add("visible");
    } else {
      elem.classList.remove("visible");
    }
  });
}, false);
