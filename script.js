let header = document.querySelector('header')
let navLiA = document.querySelectorAll('header nav ul li a')

navLiA.forEach(el => {
    console.log(el);
})

document.addEventListener('scroll', () => {
    if(window.scrollY === 0){
        header.style.backgroundColor = '#e5e5e5'
        navLiA.forEach(a => {
            a.style.color = '#333b46'
        })
        
    } else{
        header.style.backgroundColor = '#333b46'
        navLiA.forEach(a => {
            a.style.color = '#e5e5e5'
        })
    }
})

