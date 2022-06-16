
import initTyping from "./modules/typing.js";
import initAnimationScroll from "./modules/scroll.js";
import menuLock from "./modules/menuLock.js"
import initSkills from "./modules/skills.js"
import initAbout from "./modules/about.js"

setTimeout(initTyping, 800);
initAnimationScroll();
menuLock();
initSkills();
initAbout()