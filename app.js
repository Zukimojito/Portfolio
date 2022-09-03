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
    .typeString('<strong> Back-End !</strong>')
    .pauseFor(1000)
    .deleteChars(10)
    .typeString('<strong>Jeux vidéo !</strong>')
    .pauseFor(1000)
    .deleteChars(12)
    .typeString('<span style="color : #27ae60"> CSS !</span>')
    .pauseFor(1000)
    .deleteChars(5)
    .typeString('<span style="color : #ff6910"> Javascript !</span>')
    .start()

// Animation Contact

const input_fields = document.querySelectorAll('input');

for (let i = 0; i < input_fields.length; i++) {

    let field = input_fields[i];

    field.addEventListener('input', (e) => {
        if (e.target.value !== '') {
            e.target.parentNode.classList.add('animation');
        }
        else if (e.target.value == '') {
            e.target.parentNode.classList.remove('animation');
        }
    })
}

//Animation Greensock ACCUEIL

const navbarGauche = document.querySelector('.nav-gauche');
const titre = document.querySelector('h1');
const btnAcc = document.querySelectorAll('.btn-acc');
const btnMedia = document.querySelectorAll('.media');
const btnRond = document.querySelector('.btn-rond');


const TimeLine1 = gsap.timeline({ paused: true });

TimeLine1
    .to(navbarGauche, { left: '0px', ease: Power3.easeOut, duration: 0.4 })
    .from(titre, { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 })
    .staggerFrom(btnAcc, 1, { opacity: 0 }, 0.2, '-=0.30')
    .staggerFrom(btnMedia, 1, { opacity: 0 }, 0.2, '-=0.75')
    .from(btnRond, { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 }, '-=1')

window.addEventListener('load', () => {
    TimeLine1.play();
})

//Animation Greensock & MagicScroll PRESENTATION

const presentationCont = document.querySelector('.presentation');
const titrePres = document.querySelector('.titre-presentation');
const leftCont = document.querySelector('.left-presentation');
const rightCont = document.querySelector('.right-presentation');

const Timeline2 = new TimelineMax();

Timeline2
    .from(titrePres, { y: -200, opacity: 0, duration: 0.6 })
    .from(leftCont, { y: -20, opacity: 0, duration: 0.6 }, '-=0.5')
    .staggerFrom(rightCont, 1, { opacity: 0 }, 0.2, '-=0.5')


const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: presentationCont,
    triggerHook: 0.6,
    reverse: false
})
    .setTween(Timeline2)
    //.addIndicators()
    .addTo(controller)


//Animation Greensock & MagicScroll PORTFOLIO
//Vague 1

const portfolioContainer = document.querySelector('.portfolio')
const titrePortfolio = document.querySelector('.titre-portfolio')
const itemPortfolio = document.querySelectorAll('.vague1')

const TimeLinePortfolio = new TimelineMax();

TimeLinePortfolio
    .from(titrePortfolio, { y: -50, opacity: 0, duration: 0.5 })
    .staggerFrom(itemPortfolio, 1, { opacity: 0 }, 0.2, '-=0.5')

const scene2 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.6,
    reverse: false
})
    .setTween(TimeLinePortfolio)
    // .addIndicators()
    .addTo(controller)

//Vague 2

const itemPortfolio2 = document.querySelectorAll('.vague2')

const TimeLinePortfolio2 = new TimelineMax();

TimeLinePortfolio2
    .staggerFrom(itemPortfolio2, 1, { opacity: 0 }, 0.2, '-=0.5')

const scene3 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.6,
    reverse: false
})
    .setTween(TimeLinePortfolio2)
    // .addIndicators()
    .addTo(controller)

//Vague 3

const itemPortfolio3 = document.querySelectorAll('.vague3')

const TimeLinePortfolio3 = new TimelineMax();

TimeLinePortfolio3
    .staggerFrom(itemPortfolio3, 1, { opacity: 0 }, 0.2, '-=0.5')

const scene4 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.6,
    reverse: false
})
    .setTween(TimeLinePortfolio3)
    // .addIndicators()
    .addTo(controller)