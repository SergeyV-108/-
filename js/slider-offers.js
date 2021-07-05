// Инициализируем слайдер

var offersSlider = new Swiper('.slider-offers__container', {

	navigation: {
		nextEl: '.slider-offers__button_next',
		prevEl: '.slider-offers__button_prev',
	},

	//Кол-во слайдов для показа
	slidesPerView: 'auto',

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

});