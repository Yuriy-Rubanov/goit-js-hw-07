const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", handlerInput);

function handlerInput() {

    textOutput.textContent = textInput.value.trim() || 'Anonymous';

}
