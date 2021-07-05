// Инициализируем слайдер

var effectSlider = new Swiper('.content-effect__body', {

	navigation: {
		nextEl: '.content-effect__button_next',
		prevEl: '.content-effect__button_prev',
	},

	scrollbar: {
		el: ".content-effect__scrollbar",
		hide: false,
		draggable: true,
	},

	//Кол-во слайдов для показа
	slidesPerView: "auto",

	//Отступ между слайдами
	spaceBetween: 10,

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	centeredSlides: true,

	initialSlide: 1,

	breakpoints: {
		600: {

			centeredSlides: false,

			initialSlide: 0,
		},

		1000: {
			centeredSlides: false,

			initialSlide: 0,
			spaceBetween: 0,
		},


	},

});

document.addEventListener("DOMContentLoaded", function () {
	if (window.innerWidth > 1000) {
		effectSlider.disable();
	} else {
		effectSlider.enable();
	}
});

window.addEventListener('resize', function () {
	if (window.innerWidth > 1000) {
		effectSlider.disable();
	} else {
		effectSlider.enable();
	}
});