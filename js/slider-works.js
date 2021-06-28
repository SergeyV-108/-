// Инициализируем слайдер

var swiper = new Swiper('.body-works__container', {

	navigation: {
		nextEl: '.body-works__button_next',
		prevEl: '.body-works__button_prev',
	},

	//Кол-во слайдов для показа
	slidesPerView: "auto",

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	centeredSlides: true,

	initialSlide: 1,

});