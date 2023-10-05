
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

//Робота з меню (бургер)===================================================================================================================
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


//координати отбєкта відносно body, кроссбраузерно ==================================================================================================
export function offset(el){
   const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
}


