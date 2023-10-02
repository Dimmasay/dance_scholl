import * as allFunctions from "./functions/functions.js"

///// О С Н О В Н І     Ф У Н К Ц І Ї ==========================================================================================================================================================================================
//Тип пристрою touch або pc
allFunctions.addTouchClass()

//Робота з меню (бургер)
allFunctions.menuBurger()

//Робота зі спойлером
// allFunctions.spoller()

// allFunctions.btnActive()


//// Ф О Р М И ==========================================================================================================================================================================================
import * as allForms from "./functions/forms.js"


//Робота з полями input та textarea
// allForms.placeholderNone()

//Валідація форми
// allForms.formValidate()

//Надсилання форми


//// С К Р О Л ==========================================================================================================================================================================================
import * as allScroll from "./functions/scroll.js"

// Робота з шапкою 
// allScroll.headerScroll()

//Робота з анімацією 
allScroll.animOnScroll()

//Робота з плавною прокруткою
allScroll.goToBlock()


//// П О П А П И ==========================================================================================================================================================================================
// import './functions/popup.js'


//// П О Р А Л А К С ==========================================================================================================================================================================================
// import * as allParallax from "./functions/parallax.js"

//Робота з паралаксом мишкою
// allParallax.mouseParallax()


//// П О К А З А Т И    Б І Л Ь Ш Е ==========================================================================================================================================================================================
// import * as allShowMore from "./functions/showmore.js"

// allShowMore.showMore()




//// С В А Й П Е Р ==========================================================================================================================================================================================
import * as allSwiper from './functions/swiper.js'
// allSwiper.initSliders()








//Робота зі своїм кодом
import "./functions/script.js"