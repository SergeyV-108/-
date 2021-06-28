// Инициализируем слайдер

var swiper = new Swiper('.slider-advantages__container', {

	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},

	//Кол-во слайдов для показа
	slidesPerView: 'auto',

	//Отступ между слайдами
	spaceBetween: 18,

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

});