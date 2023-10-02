
/* Перевірка мобільного браузера */
export let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };


/* Додавання класу _touch або _pc для body, якщо браузер мобільний або ПК  */
export function addTouchClass() {
	// Додавання класу _touch для body, якщо браузер мобільний
	if (isMobile.any()){
      document.body.classList.add('_touch')
      /* якщо потрібно додати стрілочку для _touch*/
      let arrows = document.querySelectorAll('.menu__arrow');
      arrows.forEach((arrow)=>{
         if(arrows.length>0){
            arrow.addEventListener('click', function(){
               arrow.parentElement.classList.toggle('_active')
            })
         }
      })
   } else {
      document.body.classList.add('_pc')
   }
}

//Робота з меню (бургер)=======================================================================================================================================================================================================================        
export function menuBurger(){
   const menuBody = document.querySelector('.menu__body')
   const menuIcon = document.querySelector('.icon-menu')
   // console.log( menuIcon)

   menuIcon.addEventListener('click', function(e){
      if(e.target){
      document.body.classList.toggle('_lock')
      menuBody.classList.toggle('_menu-active')
      menuIcon.classList.toggle('_menu-active')
      }
   })
}

//Робота з меню кнопками Active ======================================================================================================================================================================================================================= 
//До потрібної кнопи додати атрибут data-btn-active=".search-form__item", в лапках обєкт до якого додається клас       
export function  btnActive (){
   document.addEventListener('click', function(e){
      const targetElement = e.target
      const targetElementForValue = targetElement.dataset.btnActive
      const needElement = document.querySelector(targetElementForValue)

      if(targetElement.closest('[data-btn-active]')){
         needElement.classList.toggle('_active')
         }
         e.preventDefault()
   }
 
   )
}

//Закриття всіх обєктів з класом -active, при кліку поза ними ======================================================================================================================================================================================================================= 


//Робота зі спойлером =======================================================================================================================================================================================================================

export function spoller(){
   document.addEventListener('click', function(e){
      const targetElement = e.target
      if(targetElement.closest('[data-spoller-btn]')){
         const targetSpollerBtn = targetElement.closest('[data-spoller-btn]')
         const spollerContainer = targetSpollerBtn.parentElement.closest('[data-spoller-container]')
         const spoller = targetSpollerBtn.parentElement.closest('[data-spoller]')
         const spollerItem = spoller.querySelector('[data-spoller-item]')

         if(!e.target.classList.contains('_spoller-active')){
            closeAllSpollers()
            openSpoller ()
   
         }else if(e.target.classList.contains('_spoller-active')){
            closeSpoller ()
            closeAllSpollers()
         }
         function openSpoller () {
            spollerContainer.classList.add('_spoller-active')
            spoller.classList.add('_spoller-active')
            spollerItem.classList.add('_spoller-active')
            e.target.classList.add('_spoller-active')
   
            // spollerItem.style.display = 'block'
         }
         //Функція закривання спойлера
         function closeSpoller () {
            spollerContainer.classList.remove('_spoller-active')
            spoller.classList.remove('_spoller-active')
            spollerItem.classList.remove('_spoller-active')
            e.target.classList.remove('_spoller-active')
            // spollerItem.style.display = 'none'
         }

         function closeAllSpollers (){
            if(spollerContainer.closest('[auto-close]')){
   
               spollerContainer.classList.remove('_spoller-active')
               // const spollerActive = spollerContainer
               const activeItem = spollerContainer.querySelectorAll('._spoller-active')
               activeItem.forEach((item)=>{
                  item.classList.remove('_spoller-active')
                  if(item.closest('[data-spoller-item]')){
                     //Дії зі
                     // item.style.display = 'none'
                  }
               })
            }
         }
      }
      if(!targetElement.closest('[data-spoller-container]')){
         const closeOutsideContainers = document.querySelectorAll('[close-outside]')
         closeOutsideContainers.forEach((container)=>{
            const activeItem = container.querySelectorAll('._spoller-active')
            activeItem.forEach((item)=>{
               item.classList.remove('_spoller-active')
            })
         })
      }
   })
}

//координати отбєкта відносно body, кроссбраузерно
export function offset(el){
   const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
}


document.addEventListener('scroll', (event)=>{
   let galleryBlock = document.querySelector('.gallery-page__container')
   let title = document.querySelector('.gallery-page__title')

   let blockOffset = offset(galleryBlock).top
   let blockHeight = galleryBlock.offsetHeight

   if(pageYOffset + window.innerHeight < blockOffset + blockHeight){
      title.style.position = 'sticky'
      // title.style.top = '40px'
   } else {
      title.style.position = 'static'
      // title.style.top = '0px'
   }

})