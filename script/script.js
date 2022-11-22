// Typed text Started
let typed = new Typed('.typing',{
    strings: ['Web developer','Веб программист'],
    typeSpeed: 110,
    BackSpeed: 100,
    loop: true
})
// Typed text Finished

// Aside Close Open Started
const navToggle = document.querySelector('.nav__toggle span '),
      aside = document.querySelector('.aside');

navToggle.onclick = () => {
        navToggle.classList.toggle('fa-times')
        aside.classList.toggle('active')
}
// Aside Close Open Finished

// Window scrolling close aside Started
window.addEventListener('scroll', function () {
    aside.classList.remove('active')
    navToggle.classList.remove('fa-times')
})
// Window scrolling close aside Finished

// Mouse Animation Started
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}
document.querySelectorAll('a, button').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
});

// Mouse Animation Finished 