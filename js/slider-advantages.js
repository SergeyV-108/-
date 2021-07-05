// Инициализируем слайдер

var advantagesSlider = new Swiper('.slider-advantages__container', {

	navigation: {
		nextEl: '.slider-advantages__button_next',
		prevEl: '.slider-advantages__button_prev',
	},

	//Кол-во слайдов для показа
	slidesPerView: 'auto',

	//Отступ между слайдами
	spaceBetween: 18,

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

});