// Importujemo biblioteku - Animacija brojeva
import { CountUp } from './counterJs/dist/countUp.min.js';

window.onload = function() {

    /*                     DOM                  */
    // Mobile menu
    let body = document.querySelector('body')
    let hamburgerIcon = document.querySelector('.mobileMenuDiv')
    let mobileMenuItems = document.querySelector('.mobileMenuItems')
    // Card section
    let cardSection = document.querySelector('.whatWeDoSectionCards')
    let cardBox = document.querySelectorAll('.card')
    // Counter section
    let num1 = document.getElementById('number1')
    let num2 = document.getElementById('number2')
    let num3 = document.getElementById('number3')
    let num4 = document.getElementById('number4') 

    /*                  MOBILE MENU                 */
    // Hamburger icon
    hamburgerIcon.addEventListener('click', () => {
        body.classList.toggle('stopScroll')
        mobileMenuItems.classList.toggle('open')
        
        for(let i = 0; i < 3; i++){
            hamburgerIcon.children[i].classList.toggle('open')
        }
    })
    // Hamburger menu items
    mobileMenuItems.addEventListener('click', () => {
        body.classList.toggle('stopScroll')
        mobileMenuItems.classList.toggle('open')

        for(let i = 0; i < 3; i++){
            hamburgerIcon.children[i].classList.toggle('open')
        }
    })

    /*                   CARD SECTION                  */
    cardBox.forEach( card => {

        card.addEventListener('click', function() {

            let card1 = this.parentElement.parentElement.children[0].children[0]
            let card2 = this.parentElement.parentElement.children[0].children[1]
            let card3 = this.parentElement.parentElement.children[1].children[0]
            let card4 = this.parentElement.parentElement.children[1].children[1]

            let allCards = [card1, card2, card3, card4]

            allCards.forEach(card => {
                // Kartica
                card.classList.remove('clickedCard')
                // Div u kome je slicica kartice
                card.children[0].classList.remove('clickedCardImage')
                // Span element - Linija
                card.children[1].children[1].classList.remove('clickedSpan')
                // Slicica u kartici - putanja
                card.children[0].children[0].setAttribute('src', './img/computerWhite.png')
            })

            console.log(card);

            if( card.classList.contains('clickedCard') ){
                card.classList.removeAll()
                card.children[0].classList.removeAll()
                card.children[1].children[1].classList.removeAll()
                card.children[0].children[0].setAttribute('src', './img/computerOrange.png')
            } else{
                card.classList.add('clickedCard')
                card.children[0].classList.add('clickedCardImage')
                card.children[1].children[1].classList.add('clickedSpan')
                card.children[0].children[0].setAttribute('src', './img/computerOrange.png')
            }
        
        })
    } )

    /*                  COUNTER SECTION                 */
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

}


