//Файл зі своїм кодом
import {offset} from "./functions.js";


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}



document.addEventListener('scroll', (event)=>{
    let galleryBlock = document.querySelector('.gallery-page__container')
    let title = document.querySelector('.gallery-page__title')

    let blockOffset = offset(galleryBlock).top
    let blockHeight = galleryBlock.offsetHeight



    if(pageYOffset + window.innerHeight < blockOffset + blockHeight){
        title.style.position = 'sticky'
    } else {
        title.style.position = 'static'
    }
})