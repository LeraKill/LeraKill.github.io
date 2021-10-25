function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock'); // Чтобы контент не скролился при открытом меню
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}

let popup = document.querySelector('.popup');
let popupBody = document.querySelector('.popup__body');
let popupContent = document.querySelector('.popup__content');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		popup.classList.add('open');
		popupContent.classList.add('open');
		document.body.classList.add('_lock');
	})
});

closePopupButton.addEventListener('click', (e) => {
	e.preventDefault();
	popup.classList.remove('open');
	popupContent.classList.remove('open');
	document.body.classList.remove('_lock');
});

document.addEventListener('click', (e) => {
	if (e.target === popupBody) {
		popup.classList.remove('open');
		popupContent.classList.remove('open');
		document.body.classList.remove('_lock');
	}
});


document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();
		let error = formValidate(form);

		let formData = new FormData(form);

		if (error == false) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData,
			});
			if (response.ok) { // если ок отправлено - то сюда видимо попап спасибо за отправку
				let result = await response.json();
				alert(result.message);
				form.reset();
				form.classList.remove('_sending');
			} else {
				document.querySelector('.error').innerHTML += ' <span class="validation-error">Произошла ошибка при отправке формы</span>';
				form.classList.remove('_sending');
			}
		}
	}

	function formValidate(form) {
		let error = false;
		const errors = document.getElementsByClassName('validation-error');
		while (errors.length > 0) {
			errors[0].parentNode.removeChild(errors[0]);
		}
		const nameField = document.getElementById('name');
		if (!nameField.value) {
			document.querySelector('.error-name').innerHTML += ' <span class="validation-error">Enter your name</span>';
			error = true;
		}
		const emailField = document.getElementById('email');
		if (!emailField.value) {
			document.querySelector('.error-email').innerHTML += '<span class="validation-error">Enter your email</span>';
			error = true;
		} else {
			if (emailTest(input)) {
				document.querySelector('.error-email').innerHTML += ' <span class="validation-error">Incorrect email</span>';
				error = true;
			}
		}
		return error;
	}

	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});






/* 	ОТ ФРИЛАНСЕРА

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();
		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData,
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Error");
				form.classList.remove('_sending');
			}
		} else {
			document.querySelector('.error').innerHTML += ' <span class="validation-error">Заполните обязательные поля</span>';

		}
	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');
		for (let i = 0; i < formReq.length; i++) {
			const input = formReq[i];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});

*/



/* First try

const form = document.getElementById('form');

form.addEventListener('submit', validate);

function validate(e) {
	let valid = true;
	const errors = document.getElementsByClassName('validation-error');
	while (errors.length > 0) {
		errors[0].parentNode.removeChild(errors[0]);
	}
	const nameField = document.getElementById('name');
	if (!nameField.value) {
		document.querySelector('.error-name').innerHTML += ' <span class="validation-error">Enter your name</span>';
		valid = false;
	}
	const emailField = document.getElementById('email');
	if (!emailField.value) {
		document.querySelector('.error-email').innerHTML += '<span class="validation-error">Enter your email</span>'
		valid = false;
	} else {
		const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!re.test(String(emailField.value).toLowerCase())) {
			document.querySelector('.error-email').innerHTML += ' <span class="validation-error">Incorrect email</span>';
			valid = false;
		}
	}

	if (false == valid) {
		e.preventDefault();
	}
	return valid;
}

*/