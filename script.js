// Importujemo biblioteku - Animacija brojeva
import { CountUp } from './counterJs/dist/countUp.min.js';

window.onload = function() {

    /*                     DOM                  */
    // Mobile menu
    let body = document.querySelector('body')
    let hamburgerIcon = document.querySelector('.mobile-menu-div')
    let mobileMenuItems = document.querySelector('.mobile-menu-items')
    // Card section
    let cardSection = document.querySelector('.what-we-do-section-cards')
    let cardBox = document.querySelectorAll('.card')
    // Counter section
    let num1 = document.getElementById('number-1')
    let num2 = document.getElementById('number-2')
    let num3 = document.getElementById('number-3')
    let num4 = document.getElementById('number-4') 

    /*                  MOBILE MENU                 */
    // Hamburger icon
    hamburgerIcon.addEventListener('click', () => {
        body.classList.toggle('stop-scroll')
        mobileMenuItems.classList.toggle('open')
        
        for(let i = 0; i < 3; i++){
            hamburgerIcon.children[i].classList.toggle('open')
        }
    })
    // Hamburger menu items
    mobileMenuItems.addEventListener('click', () => {
        body.classList.toggle('stop-scroll')
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
                card.classList.remove('clicked-card')
                // Div u kome je slicica kartice
                card.children[0].classList.remove('clicked-card-image')
                // Span element - Linija
                card.children[1].children[1].classList.remove('clicked-span')
                // Slicica u kartici - putanja
                card.children[0].children[0].setAttribute('src', './img/computerWhite.png')
            })

            console.log(card);

            if( card.classList.contains('clicked-card') ){
                card.classList.removeAll()
                card.children[0].classList.removeAll()
                card.children[1].children[1].classList.removeAll()
                card.children[0].children[0].setAttribute('src', './img/computerOrange.png')
            } else{
                card.classList.add('clicked-card')
                card.children[0].classList.add('clicked-card-image')
                card.children[1].children[1].classList.add('clicked-span')
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


