import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput,500));



function onInput(evt) {
    formData[evt.target.name] = evt.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


const populateInput = () => {
    const currentInputValues = localStorage.getItem(STORAGE_KEY);
    if (currentInputValues) {
        const parsedInputValues = JSON.parse(currentInputValues);

        refs.input.value = parsedInputValues["email"];
        refs.textarea.value = parsedInputValues["message"];
    }
};
populateInput();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);

    console.log(formData);
}