//Файл зі своїм кодом
import {offset} from "./functions.js";

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.onload = function () {

    document.addEventListener('scroll', titleStickyOrNot)

    function titleStickyOrNot() {

        let galleryBlock = document.querySelector('.gallery-page__container')
        let blockOffset = offset(galleryBlock).top
        let blockHeight = galleryBlock.offsetHeight

        let title = document.querySelector('.gallery-page__title')
        let titleSticky = document.querySelector('.gallery-page__title_sticky')
        titleSticky.style.position = 'fixed'
        titleSticky.style.visibility = 'hidden'

        if (window.innerWidth <= 767) {
            titleSticky.style.top = '135px'

            if (offset(title).top - pageYOffset < 135 && blockOffset + blockHeight > pageYOffset + window.innerHeight) {
                title.style.visibility = 'hidden'
                titleSticky.style.visibility = 'visible'
            } else {
                title.style.visibility = 'visible'
                titleSticky.style.visibility = 'hidden'
            }
        }

        if (window.innerWidth >= 768) {
            titleSticky.style.top = '50px'
            if (offset(title).top - pageYOffset < 50 && blockOffset + blockHeight > pageYOffset + window.innerHeight) {
                title.style.visibility = 'hidden'
                titleSticky.style.visibility = 'visible'
            } else {
                title.style.visibility = 'visible'
                titleSticky.style.visibility = 'hidden'
            }
        }
    }
}






