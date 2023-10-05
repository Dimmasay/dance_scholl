//Імпорт, координати отбєкта відносно body, кроссбраузерно
import {offset} from "./functions.js"

// Робота з шапкою  ==================================================================================
export function headerScroll() {
    const header = document.querySelector('header.header');
    let startPoint = 0;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset
        if (scrollTop > startPoint) {
            header.classList.add('_header-scroll')
        } else {
            header.classList.remove('_header-scroll')
        }
    })
}

//Робота з анімацією  ==================================================================================
export function animOnScroll() {

//До обєктів де протібна анімація в HTML додати - [data-anim-items]
//Де анімація потрібна один раз також в HTML додати - [data-anim-lock] [data-anim-out-one]

    const animItems = document.querySelectorAll('[data-anim-items]')

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll)

        function animOnScroll() {
            animItems.forEach((item) => {
                const animItem = item;
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top
                const animStart = 6;
                const animOutStart = 2;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                let animOutItemPoint = animItemHeight / animOutStart;


                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                    animOutItemPoint = window.innerHeight - window.innerHeight / animOutStart;
                }

                if (animItemOffset - pageYOffset < animItemPoint && animItemOffset + animItemHeight > pageYOffset) {
                    animItem.classList.add('_active')
                    animItem.classList.remove('_active-out')
                } else if (!animItem.closest('[data-anim-lock]')) {
                    animItem.classList.remove('_active')
                }

                if (animItemOffset + animItemHeight - pageYOffset < animOutItemPoint && animItemOffset + animItemHeight > pageYOffset) {
                    animItem.classList.add('_active-out')
                } else if (!animItem.closest('[data-anim-out-lock]')) {
                    animItem.classList.remove('_active-out')
                }
            })
        }

        setTimeout(() => {
            animOnScroll()
        }, 100)
    }
}

//Робота з плавною прокроткою  ==================================================================================
export function goToBlock() {
    const menuBody = document.querySelector('.menu__body')
    const menuIcon = document.querySelector('.icon-menu')

    //Для посилать в HTML додати атрибут data-goto=".клас блока"
    //Приклад <a href="#" class="menu__link" data-goto=".page__how">How</a>
    const menuLinks = document.querySelectorAll('.menu__link[data-goto]')

    //Недокрутити на вказаний розмір
    const offsetTop = 15
    if (menuLinks.length > 0) {
        menuLinks.forEach((menuLink) => {
            menuLink.addEventListener('click', onMenuLinkClick)
        });

        function onMenuLinkClick(event) {
            const link = event.target;

            //перевіряємо чи заповнений датаатрибут і чи є обєкт на який він ссилається
            if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
                const gotoBlock = document.querySelector(link.dataset.goto)

                //вираховуємо положення обєкта мінус висота шапки .header
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight - offsetTop

                if (menuIcon.classList.contains('_menu-active')) {
                    document.body.classList.remove('_lock')
                    menuBody.classList.remove('_menu-active')
                    menuIcon.classList.remove('_menu-active')
                }
                //повільна прокрутка до "gotoBlockValue"
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });
                event.preventDefault();
            }
        }
    }
}