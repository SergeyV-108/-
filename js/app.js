/*=============== Активация бургера и меню ===============*/
let menuBurger = document.querySelector('.burger');
let menuList = document.querySelector('.bottom-header__list');
let topHeaderContact = document.querySelector('.top-header__contact');

menuBurger.addEventListener("click", function (e) {
	menuBurger.classList.toggle('active');
	menuList.classList.toggle('active');
	topHeaderContact.classList.toggle('block');
});
/*=========================================================*/
/*==== Перемещение top-header__contact в выпадающее меню ====*/
let wrapper = document.querySelector('.wrapper');

checkScroll();

window.addEventListener('resize', function () {
	menuBurger.before(topHeaderContact);

	checkScroll();
});

function checkScroll() {
	if (wrapper.offsetWidth < 871) {
		menuList.append(topHeaderContact);
	}
}
/*=============================================================*/
/*======== Навигация при клике по меню header__nav ========*/
let dataScrolls = document.querySelectorAll('.bottom-header__link');

for (let dataScroll of dataScrolls) {
	let dataScrollId = dataScroll.getAttribute("data-scroll");
	let sectionId = document.querySelector(dataScrollId);
	const bottomHeaderList = document.querySelector('.bottom-header__list').getBoundingClientRect().bottom;

	dataScroll.onclick = function (e) {
		e.preventDefault();

		if (!dataScroll.classList.contains('active')) {
			for (let dataScroll of dataScrolls) {
				dataScroll.classList.remove('active');
			}

			menuBurger.classList.remove('active');
			menuList.classList.remove('active');
			topHeaderContact.classList.remove('block');

			dataScroll.classList.add('active');
		}

		if (dataScroll.hasAttribute('data-scroll')) {
			window.scrollTo({
				top: sectionId.offsetTop - bottomHeaderList,
				behavior: "smooth"
			});
		} else {
			return;
		}
	}
}
/*===========================================================*/
/*============== Модальное окно адресов в header ==============*/
let modalBtns = document.querySelectorAll('.modal-btn');
let modalCloses = document.querySelectorAll('.modal-close');
let modal;

function showModal() {
	modal.style.display = "block";
}

function closeModal() {
	modal.style.display = "none";
}

for (let modalBtn of modalBtns) {
	modalBtn.addEventListener("click", function (e) {
		e.preventDefault();
		if (modalBtn.classList.contains("top-header__addresses")) {
			modal = document.querySelector('.top-header__address');
			showModal();
		} else if (modalBtn.classList.contains("contact-header__btn") ||
			modalBtn.classList.contains("content-works__btn") ||
			modalBtn.classList.contains("content-equipment__btn")) {
			modal = document.querySelector('.top-header__modal');
			showModal();
		} else if (modalBtn.classList.contains("form-modal__button_header")) {
			modal = document.querySelector('.top-header__modal');
			closeModal();
			modal = document.querySelector('.top-header__modal-inform');
			showModal();
		} else if (modalBtn.classList.contains("intro-page__btn")) {
			modal = document.querySelector('.intro-page__modal');
			showModal();
		} else if (modalBtn.classList.contains("form-modal__button_intro")) {
			modal = document.querySelector('.intro-page__modal');
			closeModal();
			modal = document.querySelector('.intro-page__modal-inform');
			showModal();
		} else if (modalBtn.classList.contains("bottom-header__link")) {
			modal = document.querySelector('.bottom-header__modal');
			showModal();
		} else if (modalBtn.classList.contains("form-request__button")) {
			modal = document.querySelector('.intro-page__modal-inform');
			showModal();
		}
	});
}

for (let modalClose of modalCloses) {
	modalClose.addEventListener("click", function () {
		closeModal();
	});
}

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

window.addEventListener('resize', function () {
	if (window.innerWidth > 1150) {
		document.querySelector('.top-header__address').style.display = "block";
	} else {
		document.querySelector('.top-header__address').style.display = "none";
	}
});
/*================================================================*/
/*================= Активация body-card-prices ===================*/
let female = document.getElementById('female');
let male = document.getElementById('male');
let costForMales = document.querySelectorAll('.body-card-prices__cost_male');
let costForFemales = document.querySelectorAll('.body-card-prices__cost_female');

document.addEventListener("DOMContentLoaded", function () {
	if (window.innerWidth < 480) {
		female.addEventListener("click", showFemale);
		male.addEventListener("click", showMale);
		female.click();
	}
});

window.addEventListener('resize', function () {
	if (window.innerWidth < 480) {
		female.addEventListener("click", showFemale);
		male.addEventListener("click", showMale);
		female.click();
	}
});

function showFemale() {
	female.classList.add('active');
	male.classList.remove('active');

	for (let costForFemale of costForFemales) {
		costForFemale.classList.remove('remove');
	}
	for (let costForMale of costForMales) {
		costForMale.classList.add('remove');
	}
}

function showMale() {
	male.classList.add('active');
	female.classList.remove('active');

	for (let costForFemale of costForFemales) {
		costForFemale.classList.add('remove');
	}
	for (let costForMale of costForMales) {
		costForMale.classList.remove('remove');
	}
}
/*================================================================*/
/*===== Активация кнопок скролла в effect-page и choice-page =====*/
let scrollBtns = document.querySelectorAll('.scroll__btn');
let scrollerBody;
let itemWidth;

function scrollToNextItem() {
	if (scrollerBody.scrollLeft < (scrollerBody.scrollWidth - itemWidth)) {
		// Позиция прокрутки не в начале последнего элемента 
		scrollerBody.scrollBy({ left: itemWidth, top: 0, behavior: 'smooth' });
	} /* else {
		// Достигнут последний элемент 
		// Вернёмся к первому элементу, установив положение прокрутки на 0 
		scrollerBody.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	} */
}
function scrollToPrevItem() {
	if (scrollerBody.scrollLeft != 0) {
		// Позиция прокрутки не в начале первого элемента 
		scrollerBody.scrollBy({ left: -itemWidth, top: 0, behavior: 'smooth' });
	} /* else {
		// Это первый элемент (отзыв) 
		// Перейдём к последнему элементу, установив положение прокрутки на ширину «.scroller» 
		scrollerBody.scrollTo({ left: scrollerBody.scrollWidth, top: 0, behavior: 'smooth' });
	} */
}

for (let scrollBtn of scrollBtns) {
	scrollBtn.addEventListener("click", function () {
		if (scrollBtn.classList.contains("content-effect__btn_prev")) {
			scrollerBody = document.querySelector('.content-effect__body');
			itemWidth = scrollerBody.querySelector('.content-effect__text').offsetWidth;
			scrollToPrevItem();
		} else if (scrollBtn.classList.contains("content-choice__btn_prev")) {
			scrollerBody = document.querySelector('.content-choice__items');
			itemWidth = scrollerBody.querySelector('.content-choice__item').offsetWidth + 15;
			scrollToPrevItem();
		} else if (scrollBtn.classList.contains("content-effect__btn_next")) {
			scrollerBody = document.querySelector('.content-effect__body');
			itemWidth = scrollerBody.querySelector('.content-effect__text').offsetWidth;
			scrollToNextItem();
		} else if (scrollBtn.classList.contains("content-choice__btn_next")) {
			scrollerBody = document.querySelector('.content-choice__items');
			itemWidth = scrollerBody.querySelector('.content-choice__item').offsetWidth + 15;
			scrollToNextItem();
		}
	});
}
/*================================================================*/
/*=================== Спойлер в questions-page ===================*/
let itemsFaqTytle = document.querySelectorAll('.item-faq__title');

for (let itemFaqTytle of itemsFaqTytle) {

	itemFaqTytle.onclick = function () {

		let itemsFaqTytleActive = document.querySelectorAll('.item-faq__title.active');

		this.classList.toggle('active');
		this.nextElementSibling.classList.toggle('active');
		this.childNodes[5].firstChild.classList.toggle('active');

		for (let itemFaqTytleActive of itemsFaqTytleActive) {
			itemFaqTytleActive.classList.remove('active');
			itemFaqTytleActive.nextElementSibling.classList.remove('active');
			itemFaqTytleActive.childNodes[5].firstChild.classList.remove('active');
		}
	}
};
/*=================================================================*/