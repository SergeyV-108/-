// Инициализируем слайдер

var zonesSlider = new Swiper('.slider-zones__container', {

	navigation: {
		nextEl: '.slider-zones__button_next',
		prevEl: '.slider-zones__button_prev',
	},

	pagination: {
		el: '.slider-zones__pagination',
		type: "fraction",
	},

	//Кол-во слайдов для показа
	slidesPerView: 'auto',

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

});