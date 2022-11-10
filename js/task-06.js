const textInput = document.querySelector('#validation-input');
const verifyInput = Number(textInput.getAttribute('data-length'));
console.log(verifyInput);


function addRemoveStyle(remove, add) {
	textInput.classList.remove(remove);
	textInput.classList.add(add);
}

textInput.addEventListener('blur', onInputBlur)

function onInputBlur (event) {
	if (event.currentTarget.value.length === verifyInput) {
		addRemoveStyle('invalid', 'valid')
	}
	else {addRemoveStyle('valid', 'invalid')}
}



// function onInputBlur (event) {
// 	if (event.currentTarget.value.length === verifyInput) {
// 		textInput.classList.remove('invalid')
// 		textInput.classList.add('valid')
// 	}
// 	else {textInput.classList.remove('valid')
// 	    textInput.classList.add('invalid')}
// }