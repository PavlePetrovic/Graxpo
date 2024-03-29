import { CountUp } from './counterJs/dist/countUp.min.js';

window.onload = function() {

    // DOM:
    let body = document.querySelector('body')
    let hamburgerIcon = document.querySelector('.mobile-menu-div')
    let mobileMenuItems = document.querySelector('.mobile-menu-items')
    let cardBox = document.querySelectorAll('.card')
    let num1 = document.getElementById('number-1')
    let num2 = document.getElementById('number-2')
    let num3 = document.getElementById('number-3')
    let num4 = document.getElementById('number-4') 
    let form = document.querySelector('form')
    let formEmail = document.querySelector('input[type="email"]')
    let formButton = document.querySelector('input[type="button"]')
    let snackbar = document.getElementById("snackbar");
    let prev = document.querySelector('.prev')
    let next = document.querySelector('.next')
    let sliderDot1 = document.getElementById('dot-1')
    let sliderDot2 = document.getElementById('dot-2')
    let sliderDot3 = document.getElementById('dot-3')
    let tables = document.querySelectorAll('.table-div table')
    let msgUsername = document.getElementById('msg-username')
    let msgEmail = document.getElementById('msg-email')
    let msgText = document.getElementById('msg-text')
    let msgBtn = document.getElementById('msg-btn')
    let msgSnackbar = document.getElementById('msg-snackbar')
    
    // Mobile menu
    hamburgerIcon.addEventListener('click', () => {
        body.classList.toggle('stop-scroll')
        mobileMenuItems.classList.toggle('open')
        
        for(let i = 0; i < 3; i++){
            hamburgerIcon.children[i].classList.toggle('open')
        }
    })
    mobileMenuItems.addEventListener('click', () => {
        body.classList.toggle('stop-scroll')
        mobileMenuItems.classList.toggle('open')

        for(let i = 0; i < 3; i++){
            hamburgerIcon.children[i].classList.toggle('open')
        }
    })

    // Card section
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

            if(card.classList.contains('clicked-card')) {
                card.classList.removeAll()
                card.children[0].classList.removeAll()
                card.children[1].children[1].classList.removeAll()
                card.children[0].children[0].setAttribute('src', './img/computerOrange.png')
            } else {
                card.classList.add('clicked-card')
                card.children[0].classList.add('clicked-card-image')
                card.children[1].children[1].classList.add('clicked-span')
                card.children[0].children[0].setAttribute('src', './img/computerOrange.png')
            }    
        })
    } )

    // Counter section
    function counter(num) {
        if(num == num1) {
            const countUp4 = new CountUp(num, 1580, { enableScrollSpy: true, useGrouping: false });
            countUp4.handleScroll();
        } else if(num == num2) {
            const countUp4 = new CountUp(num, 2850, { enableScrollSpy: true, useGrouping: false });
            countUp4.handleScroll();
        } else if(num == num3) {
            const countUp4 = new CountUp(num, 1500, { enableScrollSpy: true, useGrouping: false });
            countUp4.handleScroll();
        } else if(num == num4) {
            const countUp4 = new CountUp(num, 1430, { enableScrollSpy: true, useGrouping: false });
            countUp4.handleScroll();
        }
    }
    window.onload = counter(num1)
    window.onload = counter(num2)
    window.onload = counter(num3)
    window.onload = counter(num4)

    // Subsciption
    form.addEventListener('click', (e) => {
        e.preventDefault()
        if(e.target.type === 'button') {
            snackbar.className = "show"

            if(formEmail.value.length < 1) {
                snackbar.innerText = 'Enter email address'
                formButton.disabled = true
            } else {
                validateEmail(formEmail, snackbar)
                formButton.disabled = false
            }
            setTimeout( function(){  
                snackbar.className = snackbar.className.replace("show", ""); 
            }, 3000);
        }

        function validateEmail(input, snack) {
            let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            
            if(input.value.match(validRegex)) {
                snack.innerText = 'Successful subscription'
            } else {
                snack.innerText = 'Invalid email address'
            }  
          }
        formButton.disabled = false
    })

    // Slider
    prev.addEventListener('click', () => {
        plusSlides(-1)
    })
    next.addEventListener('click', () => {
        plusSlides(1)
    })
    sliderDot1.addEventListener('click', () => {
        currentSlide(1)
    })
    sliderDot2.addEventListener('click', () => {
        currentSlide(2)
    })
    sliderDot3.addEventListener('click', () => {
        currentSlide(3)
    })

    let slideIndex = 1
    showSlides(slideIndex)

    function plusSlides(n) {
        showSlides(slideIndex += n)
    }
    function currentSlide(n) {
        showSlides(slideIndex = n)
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slider-section-div");
        let dots = document.getElementsByClassName("dot");

        if(n > slides.length) {
            slideIndex = 1
        }
        if(n < 1) {
            slideIndex = slides.length
        }
        for(i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for(i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex-1].style.display = "flex";
        dots[slideIndex-1].className += " active";
    }

    // Pricing table
    tables.forEach( table => {
        table.addEventListener('click', (e) => {
            let allTableDivs = table.parentElement.parentElement.children
    
            for(let i = 0; i < allTableDivs.length; i++) {
                let eachTable = allTableDivs[i]
                eachTable.children[0].classList.remove('active-table')
            }

            table.classList.toggle('active-table')
        })
    })

    // Form message
    msgBtn.addEventListener('click', (e) => {
        e.preventDefault()

        let msgUsernameValue = msgUsername.value
        let msgTextValue = msgText.value
        let msgEmailValue = msgEmail.value
        
        msgSnackbar.className = "show"
        
        if(msgUsernameValue < 1 || msgTextValue < 1 || msgEmailValue < 1) {
            msgSnackbar.innerText = 'Please fill in all fields'
        } else(
            validateEmail(msgEmail, msgSnackbar)
        )

        setTimeout(function() {  
            msgSnackbar.className = msgSnackbar.className.replace("show", ""); 
        }, 3000);

        function validateEmail(input, snack) {
            let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            
            if(input.value.match(validRegex)) {
                snack.innerText = 'Successful subscription'
            } else {
                snack.innerText = 'Invalid email address'
            }  
        }
    })
    
}


