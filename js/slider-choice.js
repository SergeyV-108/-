// Инициализируем слайдер

var choiceSlider = new Swiper('.content-choice__container', {

	navigation: {
		nextEl: '.content-choice__button_next',
		prevEl: '.content-choice__button_prev',
	},

	scrollbar: {
		el: ".content-choice__scrollbar",
		hide: false,
		draggable: true,
	},

	//Кол-во слайдов для показа
	slidesPerView: "auto",

	//Отступ между слайдами
	spaceBetween: 15,

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	centeredSlides: true,

	initialSlide: 1,

	breakpoints: {
		770: {
			spaceBetween: 50,

			centeredSlides: false,

			initialSlide: 0,
		},
	},

});