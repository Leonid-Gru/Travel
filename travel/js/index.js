
let burger = document.querySelector('.burger');
let navBurger = document.querySelector('.nav-burger');
let cross = document.querySelector('.cross');
let navBurgerItems = document.querySelectorAll('.nav-burger__item');


burger.addEventListener('click', function () {
    burger.classList.add('active');
    navBurger.classList.add('active');
})

cross.addEventListener('click', function () {
    burger.classList.remove('active');
    navBurger.classList.remove('active');
})

for (let navBurgerItem of navBurgerItems) {
    navBurgerItem.addEventListener('click', function () {
        burger.classList.remove('active');
        navBurger.classList.remove('active');
    })
}

window.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-burger') && !e.target.closest('.burger')) {
        navBurger.classList.remove('active');
        burger.classList.remove('active');
    }
})

/*Slider*/
let slides = document.querySelectorAll('.destinations__block');
let points = document.querySelectorAll('.destinations__point');
let arrowRight = document.querySelector('.destinations__arrow--right');
let arrowLeft = document.querySelector('.destinations__arrow--left');
let imgs = document.querySelectorAll(".destinations__img-mobile");
let i = 0;

if (window.innerWidth > 1100) {
    let i = parseInt(slides.length / 2);

    slides[i - 1].addEventListener('click', function prev() {
        points[i].classList.remove('point__active');
        i--;
        points[i].classList.add('point__active');
        for (let slide of slides) {
            slide.style.left = '860px';
        }

        slides[i].removeEventListener('click', prev);

        slides[i + 1].addEventListener('click', function next() {
            points[i].classList.remove('point__active');
            i++;
            points[i].classList.add('point__active');
            for (let slide of slides) {
                slide.style.left = '0';
            }

            slides[i].removeEventListener('click', next);
            slides[i - 1].addEventListener('click', prev);
        })
    })

    slides[i + 1].addEventListener('click', function next() {
        points[i].classList.remove('point__active');
        i++;
        points[i].classList.add('point__active');
        for (let slide of slides) {
            slide.style.left = '-860px';
        }

        slides[i].removeEventListener('click', next);

        slides[i - 1].addEventListener('click', function prev() {
            points[i].classList.remove('point__active');
            i--;
            points[i].classList.add('point__active');
            for (let slide of slides) {
                slide.style.left = '0';
            }

            slides[i].removeEventListener('click', prev);
            slides[i + 1].addEventListener('click', next);
        })
    })
} else {

    arrowRight.addEventListener("click", function () {
        ++i;
        if (i >= imgs.length) {
            imgs[i - 1].classList.remove("block");
            points[i - 1].classList.remove('active-mobile');
            i = 0;
            imgs[i].classList.add("block");
            points[i].classList.add('active-mobile');
        } else {
            imgs[i - 1].classList.remove("block");
            points[i - 1].classList.remove('active-mobile');
            imgs[i].classList.add("block");
            points[i].classList.add('active-mobile');
        }
    })


    arrowLeft.addEventListener("click", function () {
        if (i <= 0) {
            imgs[0].classList.remove("block");
            points[0].classList.remove('active-mobile');
            i = imgs.length - 1;
            points[i].classList.add('active-mobile');
            imgs[i].classList.add("block");
        } else {
            --i;
            imgs[i + 1].classList.remove("block");
            points[i + 1].classList.remove('active-mobile');
            imgs[i].classList.add("block");
            points[i].classList.add('active-mobile');
        }
    })
}

/* POP UP*/

let buttonLogin = document.querySelector('.header__button');
let buttonLoginMobile = document.querySelector('#account');
let login = document.querySelector('.login');
let signin = document.querySelector('.login__signin');
let inputs = document.querySelectorAll('.login__input');
let register = document.querySelector('.login__register a');
let registerText = document.querySelector('.login__register span');
let title = document.querySelector('.login__title');
let networks = document.querySelector('.login__networks');
let forgot = document.querySelector('#forgot');

buttonLogin.addEventListener('click', function () {
    login.style.display = 'block';
})

buttonLoginMobile.addEventListener('click', function () {
    login.style.display = 'block';
})

window.addEventListener('click', function (e) {
    if (!e.target.closest('.login') && !e.target.closest('.header__button') && !e.target.closest('#account')) {
        login.style.display = 'none';
    }
})

signin.addEventListener('click', function () {
    alert(`E-mail: ${inputs[0].value},\nPassword: ${inputs[1].value}`);
})

let count = 0;
register.addEventListener('click', function () {
    count++;
    if (count % 2 !== 0) {
        title.innerHTML = 'Create account';
        networks.style.display = 'none';
        signin.style.marginBottom = '0';
        signin.innerHTML = 'Sign Up';
        forgot.style.display = 'none';
        register.innerHTML = 'Log in';
        registerText.innerHTML = 'Already have an account?';
    } else {
        title.innerHTML = 'Log in to your account';
        networks.style.display = 'block';
        signin.style.marginBottom = '10px';
        signin.innerHTML = 'Sign In';
        forgot.style.display = 'block';
        register.innerHTML = 'Register';
        registerText.innerHTML = 'Don’t have an account?';
    }
})

console.log('1. Слайдер изображений + 50');
console.log('2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50');
console.log('3. Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету +25');
