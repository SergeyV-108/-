// Инициализируем слайдер

var swiper = new Swiper('.slider-reviews__container', {

	navigation: {
		nextEl: '.slider-reviews__button_next',
		prevEl: '.slider-reviews__button_prev',
	},

	//Кол-во слайдов для показа
	slidesPerView: 1,

	//Отступ между слайдами
	spaceBetween: 31,

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	loop: true,

	breakpoints: {
		700: {
			slidesPerView: 2,
			spaceBetween: 31,
		},
	},

});