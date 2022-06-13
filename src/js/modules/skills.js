const Skill = {
            html:   '<p>HTML</p> <br> <p>It is a markup language used in building web pages.</p> <br>',
            css:    '<p>CSS</p> <br> <p>It is a mechanism for adding style to a web document.</p> <br>',
            js:     '<p>JavaScript</p> <br> <p>It is a programming language. Along with HTML and CSS, it is one of the top three technologies on the web.</p> <br>',
            git:    '<p>Git</p> <br> <p>It is a distributed version control system, mainly used in software development.</p> <br>',
            github: '<p>Github</p> <br> <p>It is a source code and file hosting platform with version control using Git.</p> <br>'
}

document.querySelectorAll('.skill').forEach(  (selected) => {
    const idSelected = selected.attributes.id.value
    selected.addEventListener('mouseover', () => {
        document.querySelector('.skill-text').innerHTML = Skill[idSelected];
    } )
} );
