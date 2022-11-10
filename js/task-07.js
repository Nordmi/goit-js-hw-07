const rangeInput = document.querySelector ('#font-size-control');
const spanText = document.querySelector('span#text');

rangeInput.addEventListener('change', onInputRangeChange);

function onInputRangeChange(event) {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
}