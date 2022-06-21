// Importujemo biblioteku - Animacija brojeva
import { CountUp } from './counterJs/dist/countUp.min.js';

//                      DOM
// Card section
let cardSection = document.querySelector('.whatWeDoSectionCards')
let cardBox = document.querySelectorAll('.card')
// Counter section
let num1 = document.getElementById('number1')
let num2 = document.getElementById('number2')
let num3 = document.getElementById('number3')
let num4 = document.getElementById('number4')

cardBox.forEach( card => {
    let clicked = false
    // Work in progress
    card.addEventListener('click', e => {
        if(clicked === true){
            // Kartica
            card.classList.remove('clickedCard')
            // Div u kome je slicica kartice
            card.childNodes[1].classList.remove('clickedCardImage')
            // Span element - Linija
            card.childNodes[3].childNodes[3].classList.remove('clickedSpan')
            // Slicica u kartici - putanja
            card.childNodes[1].childNodes[1].src = "./img/computerWhite.png"
            clicked = false
        } else{
            card.classList.add('clickedCard')
            card.childNodes[1].classList.add('clickedCardImage')
            card.childNodes[3].childNodes[3].classList.add('clickedSpan')
            card.childNodes[1].childNodes[1].src = "./img/computerOrange.png"
            clicked = true
        }
    })
} )

// Animacija brojeva ispod "What we do" sekcije
function counter(num) {
    if(num == num1){
        const countUp4 = new CountUp(num, 1580, { enableScrollSpy: true, useGrouping: false });
        countUp4.handleScroll();
    } else if(num == num2){
        const countUp4 = new CountUp(num, 2850, { enableScrollSpy: true, useGrouping: false });
        countUp4.handleScroll();
    } else if(num == num3){
        const countUp4 = new CountUp(num, 1500, { enableScrollSpy: true, useGrouping: false });
        countUp4.handleScroll();
    } else if(num == num4){
        const countUp4 = new CountUp(num, 1430, { enableScrollSpy: true, useGrouping: false });
        countUp4.handleScroll();
    }
}

window.onload = counter(num1)
window.onload = counter(num2)
window.onload = counter(num3)
window.onload = counter(num4)



