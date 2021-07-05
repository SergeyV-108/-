// Инициализируем слайдер

var licensesSlider = new Swiper('.slider-licenses__container', {

	navigation: {
		nextEl: '.slider-licenses__button_next',
		prevEl: '.slider-licenses__button_prev',
	},

	pagination: {
		el: '.slider-licenses__pagination',
		type: "fraction",
	},

	//Кол-во слайдов для показа
	slidesPerView: "auto",

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	centeredSlides: true,

	initialSlide: 1,
	
});