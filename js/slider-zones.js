// Инициализируем слайдер

var swiper = new Swiper('.slider-zones__container', {

	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
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