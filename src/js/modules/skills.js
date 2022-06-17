import {Skill} from '../text.js';
export default function initSkills() {
    document.querySelectorAll('.skill').forEach(  (selected) => {
        const idSelected = selected.attributes.id.value
        selected.addEventListener('mouseover', () => {
            document.querySelector('.skill-text').innerHTML = Skill[idSelected];
        } )

        selected.addEventListener('mouseout', () => {
            document.querySelector('.skill-text').innerHTML = Skill.hover;
        } ) 
    } )}
