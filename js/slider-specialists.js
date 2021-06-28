// Инициализируем слайдер

var swiper = new Swiper('.slider-specialists__container', {

	navigation: {
		nextEl: '.slider-specialists__button_next',
		prevEl: '.slider-specialists__button_prev',
	},

	//Кол-во слайдов для показа
	slidesPerView: 'auto',

	//Отступ между слайдами
	spaceBetween: 30,

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

});