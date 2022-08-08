const btnMenuNavbar = document.querySelector('.btn-rond-menu');
const navbar = document.querySelector('.nav-gauche');
const allItemNavbar = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');


btnMenuNavbar.addEventListener("click", () => {
    ligne.classList.toggle("active");
    navbar.classList.toggle("menu-visible");
})

// @media screen pour js
if (window.matchMedia('(max-width : 1300px)')) {
    allItemNavbar.forEach(item => {
        item.addEventListener('click', () => {
            navbar.classList.toggle("menu-visible");
            ligne.classList.toggle("active");
        })
    })

}

// Animation écriture

const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
});


typewriter
    .pauseFor(1000)
    .changeDelay(20)
    .typeString('Moi c\'est Jiongjiong LIN')
    .pauseFor(500)
    .typeString('<strong>, Développeur Font-End !</strong>')
    .pauseFor(1000)
    .deleteChars(10)
    .typeString('<strong>Jeux vidéo !</strong>')
    .pauseFor(1000)
    .deleteChars(12)
    .typeString('<span style="color : #27ae60"> CSS !</span>')
    .pauseFor(1000)
    .deleteChars(5)
    .typeString('<span style="color : #ff6910"> Javascript !</span>')
    .pauseFor(1000)
    .deleteChars(12)
    .typeString('<span style="color : aqua"> React js !</span>')
    .start()
