'use strict'

/* МЕНЮ БУРГЕР */
// Находим наш "бургер"
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock'); // Чтобы контент не скролился при открытом меню
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}

// Прокрутка при клике

// 1. собираем массив объектов, которые участвуют в навигации

const menuLinks = document.querySelectorAll('.menu__item[data-goto]');
// проверяем, если есть ссылки с data-атрибутом - начинаем работу

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);

	});
	function onMenuLinkClick(e) {
		const menuLink = e.target; // получаем объект, на который кликаем
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			/* получаем в константе точное местоположение секции: местоположение страницы в пикселях + количество прокрученных пикселей - высота шапки*/
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
			//код, чтобы меню-бургер закрывалось при клике
			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}
			// код, который заставит скролл прокрутиться 
			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth'
			});
			e.preventDefault();
		}
	}
}




let container = document.getElementsByClassName('toggler');
let theLink = document.getElementsByClassName('toggler-link');
let text = document.getElementsByClassName('about__item-text');
for (let i = 0; i < theLink.length; i++) {
	function handler(evt) {
		evt.preventDefault();
		container[i].classList.toggle('toggler-active');
		text[i].classList.toggle('hidden');
		theLink[i].classList.toggle('toggler-link-active');
	}
	theLink[i].addEventListener('click', handler);
}

let items = document.getElementsByClassName('gallery__item');
let theHiddenPart = document.getElementsByClassName('cover__gallery__item');
for (let j = 0; j < theHiddenPart.length; j++) {
	for (let i = j; i < items.length; i++) {
		items[i].onmouseover = function () {
			theHiddenPart[j].classList.remove("hidden");
		}
		items[i].onmouseout = function () {
			theHiddenPart[j].classList.add("hidden");
		}
	}
}


let clientPhotos = document.getElementsByClassName('item-teamwork__photo');
let clientHiddenPart = document.getElementsByClassName('item-teamwork__cover');
for (let j = 0; j < clientHiddenPart.length; j++) {
	for (let i = j; i < clientPhotos.length; i++) {
		clientPhotos[i].onmouseover = function () {
			clientHiddenPart[j].classList.remove('hidden');
		}
		clientPhotos[i].onmouseout = function () {
			clientHiddenPart[j].classList.add('hidden');
		}
	}
}


