const styleSwitcherToggle = document.querySelector('.style__switcher-toggler');
const styleSwitcher = document.querySelector('.style__switcher');

// Style Color Exchanges click Started
styleSwitcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.toggle('active')
})
// Style Color Exchanges click Finished

// Window scroling color exchange window close Started
window.addEventListener('scroll', () => {
    if (styleSwitcher.classList.contains('active')) {
        styleSwitcher.classList.remove('active')
    }
})

// Window scroling color exchange window close Finished

// StyleSwitcher Exchange Started
const alternateStyle = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled')
        } else {
          style.setAttribute('disabled', 'true')    
        }                                           
    })
    localStorage.setItem('colorsPage', JSON.stringify(color)) 
}

for (let i = 0; i < alternateStyle.length; i++) {
    if (alternateStyle[i].getAttribute('title') === JSON.parse(localStorage.getItem('colorsPage'))) {
        alternateStyle[i].removeAttribute('disabled')
    }
}
// StyleSwitcher Exchange Finished

// Day Night Function Started
const dayNight = document.querySelector('.day__night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun')
    dayNight.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.toggle('dark')
    let dcBody = document.body
    let theme = null
    if (dcBody.classList.contains('dark')) {
        theme = 'DARK'
    } else{
        theme = 'LIGHT'
    }
    localStorage.setItem('themePage', JSON.stringify(theme))
})
let getTheme = JSON.parse(localStorage.getItem('themePage'))
if (getTheme === 'DARK') {
    document.body.classList = 'dark'
}
// Day Night Function Finished

// Day Night Icon Exchange Started
window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun')
    } else {
        dayNight.querySelector('i').classList.add('fa-moon')
    }
})
// Day Night Icon Exchange Finished

// Aside Link click Started
const asideLink = document.querySelectorAll('.aside__nav-link'),
aside2 = document.querySelector('.aside'),
navToggle2 = document.querySelector('.nav__toggle span ')
asideLink.forEach(item => {
    item.addEventListener('click', () => {
        asideLink.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active')
        aside2.classList.toggle('active')
        navToggle2.classList.remove('fa-times')
    })
});
// Aside Link click Finished